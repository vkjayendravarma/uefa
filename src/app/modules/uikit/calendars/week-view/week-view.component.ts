import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-calendar-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent implements OnInit {
  header = [
    { day: 'SUN', date: '21' },
    { day: 'SUN', date: '21' },
    { day: 'SUN', date: '21' },
    { day: 'SUN', date: '21' },
    { day: 'SUN', date: '21' },
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
      done: [
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
