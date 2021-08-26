import { Component, OnInit } from '@angular/core';
import { FormBuilderValuesInterface } from 'src/app/prototypes/formBuilderValues.interface';

@Component({
  selector: 'uikit-create-new-survey',
  templateUrl: './create-new-survey.component.html',
  styleUrls: ['./create-new-survey.component.scss']
})
export class CreateNewSurveyComponent implements OnInit {

  formBluePrint!: FormBuilderValuesInterface[]

  constructor() { }

  ngOnInit(): void {
  }

  formBuildChangeEventHandler(event:FormBuilderValuesInterface[]){
    this.formBluePrint = event;
  }

}
