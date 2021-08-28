import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, startOfDay } from 'date-fns';
import { DOCUMENT } from '@angular/common';

const colors: any = {
  yellow: {
    primary: '#fffbdb',
    secondary: '#fffbdb',
  },
  red: {
    primary: '#ffd9d9',
    secondary: '#ffd9d9',
  },
};

@Component({
  selector: 'uikit-calendar-week-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './week-view.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent implements OnInit {
  view: CalendarView = CalendarView.Week;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Task not attended',
      color: colors.red,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      title: 'Task attended',
      color: colors.yellow,
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 2), 2),
      end: addDays(new Date(), 2),
      title: 'Upcoming Task',
      color: colors.yellow,
    },
  ];

  private readonly darkThemeClass = 'dark-theme';

  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit(): void {
    this.document.body.classList.add(this.darkThemeClass);
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(this.darkThemeClass);
  }
}
