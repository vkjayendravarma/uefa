import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilderValuesInterface} from 'src/app/prototypes/formBuilderValues.interface';
@Component({
  selector: 'uikit-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  @Output()
  formBuildChangeEvent = new EventEmitter();


  index: number = 0;
  formList: FormBuilderValuesInterface[] = [];
  formListIterator: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.addQuestion()
  }

  formListOptionsListChangeEventHandler(index: number, event:any){
    this.formList[index].optionsList = event;

    this.formBuildChangeEvent.emit(this.formList);
  }

  addQuestion(){
    let formItem: FormBuilderValuesInterface = {
      question: '',
      viewType: '',
      optionsList: []
    };
    this.formList.push(formItem)
    this.formListIterator.push(this.index)
  }

  logNow(){
    console.log(this.formList);
    
  }
}
