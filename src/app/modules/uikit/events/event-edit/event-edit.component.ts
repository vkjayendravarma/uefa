import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { TagsPrototype } from 'src/app/prototypes/tags.interface';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Attendance {
  name: string;
  role: string;
  email: string;
  // attendance: string;
}

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
})
export class EventEditComponent implements OnInit {
  tags: TagsPrototype[] = [];
  showSpinners = true;
  showSeconds = false;
  stepHour = 1;
  stepMinute = 1;
  stepSecond = 1;
  selectable = true;
  removable = true;
  addOnBlur = true;
  displayTable = false;
  slideChecked = true;
  attendanceData: Attendance[] = [
    {name: 'St.Xavier', role: 'Player', email: 'abc@gmail.com'},
    {name: 'St.Xavier', role: 'Player', email: 'abc@gmail.com'},
    {name: 'St.Xavier', role: 'Player', email: 'abc@gmail.com'},
    {name: 'St.Xavier', role: 'Player', email: 'abc@gmail.com'},
    {name: 'St.Xavier', role: 'Player', email: 'abc@gmail.com'},
    {name: 'St.Xavier', role: 'Player', email: 'abc@gmail.com'},
  ];



  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  Invitees: any = [{ name: 'Facilitators' }, { name: 'Players' }];
  constructor() {}

  ngOnInit(): void {
    this.tags = [
      {
        name: 'Draft',
        bgColor: '#D5DFEF',
      },
    ];
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.Invitees.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: any): void {
    const index = this.Invitees.indexOf(fruit);

    if (index >= 0) {
      this.Invitees.splice(index, 1);
    }
  }

  onChangeSlideToggle()
  {
    this.slideChecked? this.displayTable = false : this.displayTable = true;
  }
}
