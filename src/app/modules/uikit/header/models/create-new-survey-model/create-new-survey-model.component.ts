import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-survey-model',
  templateUrl: './create-new-survey-model.component.html',
  styleUrls: ['./create-new-survey-model.component.scss'],
})
export class CreateNewSurveyModelComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  clickHandler() {
    var id = window.localStorage.getItem('role');

    if (id == 'admin' || id == 'facilitator' || id == 'player') {
      console.log(id);

      this.router.navigateByUrl('/dashboard/' + id + '/surveys/new');
    }
  }
}
