import { Component, OnInit } from '@angular/core';
import { FormBuilderValuesInterface } from 'src/app/prototypes/formBuilderValues.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-surveys',
  templateUrl: './answer-surveys.component.html',
  styleUrls: ['./answer-surveys.component.scss'],
})
export class AnswerSurveysComponent implements OnInit {
  formBluePrint!: FormBuilderValuesInterface[];
  surveys = [
    {
      optionsList: ['Option 1', 'Option 2', 'Option 3'],
      question: 'Ouestion 1',
      viewType: 'Multiple Choice',
    },
    {
      optionsList: ['Option 1', 'Option 2', 'Option 3'],
      question: 'Ouestion 2',
      viewType: 'Multiple Choice',
    },
    {
      optionsList: ['Option 1', 'Option 2', 'Option 3'],
      question: 'Ouestion 3',
      viewType: 'Multiple Choice',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  clickHandler() {
    var id = window.localStorage.getItem('role');

    if (id == 'admin' || id == 'facilitator' || id == 'player') {
      console.log(id);

      this.router.navigateByUrl('/dashboard/' + id + '/surveys/done');
    }
  }
}
