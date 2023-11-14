import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import { getRandomColor } from '../../helper';
import { MatButtonModule } from '@angular/material/button';

type ChartType = SeriesOptionsType['type'];

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule, MatButtonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit, OnChanges {
  @Input()
  series!: Array<SeriesOptionsType>;

  @Input()
  options!: Highcharts.Options;

  @Input()
  title?: string = 'Chart';

  highcharts = Highcharts;
  updated = false;

  chartType!: ChartType;
  chartTypes: { [t: string]: ChartType } = {
    spline: 'bar',
    bar: 'spline',
  };

  chartOptions!: Highcharts.Options;

  ngOnInit(): void {
    this.chartOptions = {
      title: { text: this.title },
      ...this.options,
      colors: this.series.map(() => getRandomColor()),
      series: this.series,
    };
    this.chartType = this.series[0].type;
  }

  ngOnChanges() {
    this.chartOptions = {
      ...this.chartOptions,
      ...this.options,
    };
    this.chartType = this.series[0].type;
    this.updated = true;
  }

  changeColor() {
    const colors: string[] = [];
    this.series.forEach(() => {
      colors.push(getRandomColor());
    });

    this.chartOptions.colors = colors;

    this.updated = true;
  }

  updateType() {
    const newSeries = this.chartOptions?.series?.map((s) => ({
      ...s,
      type: this.chartTypes[s.type],
    })) as Array<SeriesOptionsType>;

    this.chartType = newSeries[0].type;
    this.chartOptions = {
      ...this.chartOptions,
      series: newSeries,
    };

    this.updated = true;
  }
}
