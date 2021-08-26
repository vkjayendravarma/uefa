import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'uikit-form-radio-single-answer',
  templateUrl: './form-radio-single-answer.component.html',
  styleUrls: ['./form-radio-single-answer.component.scss'],
})
export class FormRadioSingleAnswerComponent implements OnInit {

  @Output()
  radioOptionsChangeEvent = new EventEmitter();

  index: number = 0;
  optionsList: string[] = [""];
  optionsIterator: number[]= [0];

  constructor() {}

  ngOnInit(): void {
  
  }

  addOption(): void {
    this.index = this.index + 1;
    this.optionsList.push('');
    this.optionsIterator.push(this.index);
  }

  deleteOption(index: number): void {   
    this.optionsList.splice(index, 1);
    this.optionsIterator.pop() 
  }

  lognow(){
    console.log(this.optionsList);
  }

  valueChanges(): void {
    this.radioOptionsChangeEvent.emit(this.optionsList)   
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.optionsList, event.previousIndex, event.currentIndex);
  }
}
