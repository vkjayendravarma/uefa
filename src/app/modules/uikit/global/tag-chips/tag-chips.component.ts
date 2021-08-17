import { Component, Input, OnInit } from '@angular/core';
import { TagsPrototype } from 'src/app/prototypes/tags.interface';

@Component({
  selector: 'app-tag-chips',
  templateUrl: './tag-chips.component.html',
  styleUrls: ['./tag-chips.component.scss']
})
export class TagChipsComponent implements OnInit {
  @Input()
  tags: TagsPrototype[] | undefined;
  constructor() { }

  ngOnInit(): void {
    if (this.tags === undefined) {
      this.tags = [
        {
          name: 'CLUB',
          bgColor: '#FFD9D9'
        },
        {
          name: 'LIVERPOOL',
          bgColor: '#D5DFEF'
        }
      ];
    }
  }

}
