import { Component, OnInit } from '@angular/core';
import { TeamAttendance } from 'src/app/prototypes/attandance.interface';

@Component({
  selector: 'uikit-team-attendance',
  templateUrl: './team-attendance.component.html',
  styleUrls: ['./team-attendance.component.scss'],
})
export class TeamAttendanceComponent implements OnInit {
  points = [1, 2, 3, 4, 5, 6];

  attendanceData: TeamAttendance[] = [];
  numberOfDays = 30;
  headerNumbers = new Array<number>(this.numberOfDays);

  constructor() {}

  ngOnInit(): void {
    this.calendarInitializer();
  }

  calendarInitializer(): void {
    for (let day = 1; day <= this.numberOfDays; day++) {
      let holiday = false;
      if (day % 7 == 0 || day % 7 == 1) {
        holiday = true;
      }
      let dateData: TeamAttendance = {
        date: day,
        isHoliday: holiday,
        data: {
          ts: true,
          pm: false,
        },
      };

      this.attendanceData.push(dateData);
    }
    console.log(this.attendanceData);
  }

  updateAttandance(): void {
    console.log(this.attendanceData);
  }

 
}
