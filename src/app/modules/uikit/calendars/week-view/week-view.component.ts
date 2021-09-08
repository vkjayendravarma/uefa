import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-calendar-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent implements OnInit {
  // Getting start & end date of current month
  date = new Date();
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);

  // Getting array of all the days for the month
  getDateArray = function (start: Date, end: Date) {
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  };

  dateArr = this.getDateArray(this.firstDay, this.lastDay);

  // Demo Data
  task = [
    [
      {
        done: true,
        name: 'Task 1 Done Start',
        start: '09:00AM',
        end: '10:00AM',
      },
      {
        done: true,
        name: 'Task 2 Done',
        start: '02:00PM',
        end: '04:00PM',
      },
      {
        done: false,
        name: 'Task 1 Not Done',
        start: '11:00AM',
        end: '12:00AM',
      },
      {
        done: false,
        name: 'Task 2 Not Done',
        start: '05:00PM',
        end: '06:00PM',
      },
      {
        done: true,
        name: 'Task 1 Done',
        start: '09:00PM',
        end: '10:00PM',
      },
    ],
    [
      {
        done: true,
        name: 'Task 1 Done',
        start: '05:00PM',
        end: '06:00PM',
      },
      {
        done: true,
        name: 'Task 2 Done',
        start: '09:00AM',
        end: '10:00AM',
      },
      {
        done: false,
        name: 'Task 1 Not Done',
        start: '02:00PM',
        end: '04:00PM',
      },
      {
        done: false,
        name: 'Task 1 Done',
        start: '03:00PM',
        end: '05:00PM',
      },
      {
        done: true,
        name: 'Task 1 Done',
        start: '09:00PM',
        end: '10:00PM',
      },
    ],
    [
      {
        done: false,
        name: 'Task 1 Not Done',
        start: '02:00PM',
        end: '04:00PM',
      },
      {
        done: false,
        name: 'Task 1 Done',
        start: '03:00PM',
        end: '05:00PM',
      },
      {
        done: true,
        name: 'Task 1 Done',
        start: '09:00PM',
        end: '10:00PM',
      },
    ],
    [
      {
        done: true,
        name: 'Task 1 Done',
        start: '05:00PM',
        end: '06:00PM',
      },
      {
        done: true,
        name: 'Task 2 Done',
        start: '09:00AM',
        end: '10:00AM',
      },
      {
        done: true,
        name: 'Task 1 Done',
        start: '02:00PM',
        end: '04:00PM',
      },
    ],
    [
      {
        done: false,
        name: 'Task 1 Not Done',
        start: '09:00AM',
        end: '10:00AM',
      },
    ],
  ];

  sortTasks = function (arr: Array<Array<Object>>) {
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      let newarr = element.sort((obj1: any, obj2: any) => {
        if (obj1.start > obj2.start) {
          return 1;
        }
        if (obj1.start < obj2.start) {
          return -1;
        }

        return 0;
      });
      arr[i] = newarr;
    }
  };

  constructor() {
    this.sortTasks(this.task);
  }

  ngOnInit(): void {}
}
