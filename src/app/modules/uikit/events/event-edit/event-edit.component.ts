import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { TagsPrototype } from 'src/app/prototypes/tags.interface';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';

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

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  Invitees: any = [{ name: 'Facilitators' }, { name: 'Players' }];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

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
  authHandler() {
    var id = window.localStorage.getItem('role');

    if (id == 'admin' || id == 'facilitator' || id == 'player') {
      console.log(id);

      this.router.navigateByUrl('/dashboard/' + id + '/events/preview');
    }
  }
}
