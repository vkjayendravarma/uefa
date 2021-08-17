import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-organized-view',
  templateUrl: './organized-view.component.html',
  styleUrls: ['./organized-view.component.scss']
})
export class OrganizedViewComponent  implements OnInit  {

  @Input()
  componentTitle!: string;

  @Input()
  enableCreateNew: boolean = false;
  constructor(  ) {
    
  }

  ngOnInit(): void {
  }

}
