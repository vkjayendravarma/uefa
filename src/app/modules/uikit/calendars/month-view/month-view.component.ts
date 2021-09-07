import { Component, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';


const colors: any = {
  periwinkleGray: {
    primary: '#D5DFEF',
  },
  blue: {
    primary: '#1e90ff',
  },
  tequila: {
    primary: '#FEE6C9',
  },
};


@Component({
  selector: 'uikit-calendar-month-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {

  EVENT_LIMIT = 2; // Number of events limit to be displayed per day.

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  events: CalendarEvent[] = [ // List of static events with start and end dates.
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.periwinkleGray,
      allDay: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date asd asdsadasd asdasd',
      color: colors.tequila,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A sample event',
      color: colors.tequila,
    },
  ];

  activeDayIsOpen: boolean = true;


  ngOnInit(){
  }

  // Called when the day cell is clicked, events on a day are shown if clicked on a day.
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  // Called when '1 more' event is clicked on the day.
  handleMoreEvent(e: any , events: any) {
  }

  eventClicked(event: CalendarEvent<any>): void {
    console.log("click event");
    console.log(event);
    
    window.open(
      `/`,
      '_blank'
    );
  }

}
