import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { TagsPrototype } from 'src/app/prototypes/tags.interface';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  tags: TagsPrototype[] = [];
  showSpinners = true;
  showSeconds = false;
  stepHour = 1;
  stepMinute = 1;
  stepSecond = 1
  selectable = true;
  removable = true;
  addOnBlur = true;
  
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  Invitees: any = [
    {name: 'Facilitators'},
    {name: 'Players'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.tags = [
      {
        name: 'Draft',
        bgColor: '#D5DFEF'
      }
    ]
  }

  
 

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.Invitees.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit:any): void {
    const index = this.Invitees.indexOf(fruit);

    if (index >= 0) {
      this.Invitees.splice(index, 1);
    }
  }

  

}
