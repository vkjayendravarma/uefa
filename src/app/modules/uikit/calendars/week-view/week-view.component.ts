import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-calendar-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent implements OnInit {
  // Getting dates
  date = new Date();
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);

  // Demo Data
  header = [
    { day: 'SUN', date: '21' },
    { day: 'SUN', date: '22' },
    { day: 'SUN', date: '23' },
    { day: 'SUN', date: '24' },
    { day: 'SUN', date: '25' },
  ];

  task = [
    {
      done: [
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
      ],
      notDone: [
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
      ],
    },
    {
      done: [],
      notDone: [
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
      ],
    },
    {
      done: [
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
      ],
      notDone: [
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
      ],
    },
    {
      done: [
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
      ],
      notDone: [],
    },
    {
      done: [],
      notDone: [
        {
          name: 'Task 1',
          time: '10:00AM - 12:00PM',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
