import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'uikit-survey-publish',
  templateUrl: './survey-publish.component.html',
  styleUrls: ['./survey-publish.component.scss']
})
export class SurveyPublishComponent implements OnInit {
  showSpinners = true;
  showSeconds = false;
  stepHour = 1;
  stepMinute = 1;
  stepSecond = 1;
  selectable = true;
  removable = true;
  addOnBlur = true;
  constructor() { }

  ngOnInit(): void {
  }

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  Invitees: any = [{ name: 'Facilitators' }, { name: 'Players' }];

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

}
