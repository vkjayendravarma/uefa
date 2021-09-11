import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uikit-ra-criteria-view',
  templateUrl: './ra-criteria-view.component.html',
  styleUrls: ['./ra-criteria-view.component.scss'],
})
export class RaCriteriaViewComponent implements OnInit {
  @Input()
  type: string | undefined;

  @Input()
  name: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
