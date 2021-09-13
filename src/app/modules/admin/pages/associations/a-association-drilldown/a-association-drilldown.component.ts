import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a-association-drilldown',
  templateUrl: './a-association-drilldown.component.html',
  styleUrls: ['./a-association-drilldown.component.scss'],
})
export class AAssociationDrilldownComponent implements OnInit {
  matTabLinks = [
    {
      label: 'Institutes',
    },
    {
      label: 'Posts',
    },
    {
      label: 'Events',
    },
    {
      label: 'Surveys',
    },
    {
      label: 'Tournaments',
    },
  ];

  name: string | undefined;

  constructor(private _activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params) => {
      console.log(params);
      this.name = params.name;
    });
  }
}
