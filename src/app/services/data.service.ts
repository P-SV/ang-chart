import { Injectable } from '@angular/core';
import { SeriesOptionsType } from 'highcharts';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {}
  getData(): Observable<SeriesOptionsType[][]> {
    return of([
      [
        {
          type: 'spline',
          name: 'Temperature-1',
          data: [
            [new Date('12.10.2023').getTime(), 29],
            [new Date('12.11.2023').getTime(), 30],
            [new Date('12.12.2023').getTime(), 25],
            [new Date('12.13.2023').getTime(), 14],
            [new Date('12.14.2023').getTime(), 18],
            [new Date('12.15.2023').getTime(), 19],
            [new Date('12.16.2023').getTime(), 25],
            [new Date('12.17.2023').getTime(), 24],
            [new Date('12.18.2023').getTime(), 18],
            [new Date('12.19.2023').getTime(), 20],
            [new Date('12.20.2023').getTime(), 20],
            [new Date('12.21.2023').getTime(), 20],
            [new Date('12.22.2023').getTime(), 25],
            [new Date('12.23.2023').getTime(), 24],
            [new Date('12.24.2023').getTime(), 24],
            [new Date('12.25.2023').getTime(), 27],
          ],
        },
      ],
      [
        {
          type: 'spline',
          name: 'Temperature-2',
          data: [
            [new Date('12.10.2023').getTime(), 25],
            [new Date('12.11.2023').getTime(), 30],
            [new Date('12.12.2023').getTime(), 25],
            [new Date('12.13.2023').getTime(), 14],
            [new Date('12.14.2023').getTime(), 18],
            [new Date('12.15.2023').getTime(), 25],
            [new Date('12.16.2023').getTime(), 25],
            [new Date('12.17.2023').getTime(), 25],
            [new Date('12.18.2023').getTime(), 18],
            [new Date('12.19.2023').getTime(), 20],
            [new Date('12.20.2023').getTime(), 25],
            [new Date('12.21.2023').getTime(), 20],
            [new Date('12.22.2023').getTime(), 25],
            [new Date('12.23.2023').getTime(), 24],
            [new Date('12.24.2023').getTime(), 25],
            [new Date('12.25.2023').getTime(), 27],
          ],
        },
      ],
      [
        {
          type: 'spline',
          name: 'Humidity',
          data: [
            [new Date('12.10.2023').getTime(), 80],
            [new Date('12.11.2023').getTime(), 85],
            [new Date('12.12.2023').getTime(), 84],
            [new Date('12.13.2023').getTime(), 80],
            [new Date('12.14.2023').getTime(), 82],
            [new Date('12.15.2023').getTime(), 87],
            [new Date('12.16.2023').getTime(), 85],
            [new Date('12.17.2023').getTime(), 80],
            [new Date('12.18.2023').getTime(), 85],
            [new Date('12.19.2023').getTime(), 85],
            [new Date('12.20.2023').getTime(), 80],
            [new Date('12.21.2023').getTime(), 85],
            [new Date('12.22.2023').getTime(), 82],
            [new Date('12.23.2023').getTime(), 80],
            [new Date('12.24.2023').getTime(), 85],
            [new Date('12.25.2023').getTime(), 88],
          ],
        },
      ],
    ]);
  }
}
