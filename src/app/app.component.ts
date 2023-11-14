import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SeriesOptionsType, XAxisOptions } from 'highcharts';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChartComponent } from './components/chart/chart.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DataService } from './services/data.service';

type XAxisDateRange = {
  start?: string | null;
  end?: string | null;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ChartComponent,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  chartsSeries!: Observable<SeriesOptionsType[][]>;
  subscription!: Subscription;

  chartOptions: Highcharts.Options = {
    xAxis: {
      startOnTick: true,
      endOnTick: true,
      type: 'datetime',
    },
  };

  dateRange = new FormGroup({
    start: new FormControl<string | null>(null),
    end: new FormControl<string | null>(null),
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.chartsSeries = this.dataService.getData();

    this.subscription = this.dateRange.valueChanges.subscribe((value) =>
      this.restrictXAxisDateRange(value)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  restrictXAxisDateRange({ start, end }: XAxisDateRange): void {
    const newLimits: Partial<XAxisOptions> = {};
    start && (newLimits.min = new Date(start).getTime());
    end && (newLimits.max = new Date(end).getTime());

    this.chartOptions = {
      ...this.chartOptions,
      xAxis: {
        ...this.chartOptions.xAxis,
        ...newLimits,
      },
    };
  }
}
