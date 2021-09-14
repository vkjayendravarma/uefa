import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent implements OnInit {
  @Input()
  icon: string = '';

  @Input()
  message: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.icon);
    console.log(this.message);
  }
}
