import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'uikit-team-member-details',
  templateUrl: './team-member-details.component.html',
  styleUrls: ['./team-member-details.component.scss'],
})
export class TeamMemberDetailsComponent implements OnInit {
  constructor(private _activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params) => {
      console.log(params);
    });
  }
}
