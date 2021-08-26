import { Component, Input, OnInit } from '@angular/core';
import { FormBuilderValuesInterface } from 'src/app/prototypes/formBuilderValues.interface';

@Component({
  selector: 'uikit-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.scss']
})
export class FormRenderComponent implements OnInit {

  @Input()
  formBluePrint: FormBuilderValuesInterface[] | undefined;

  constructor() { }

  ngOnInit(): void {
   
  }



}
