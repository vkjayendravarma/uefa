import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-member-details-edit',
  templateUrl: './team-member-details-edit.component.html',
  styleUrls: ['./team-member-details-edit.component.scss']
})
export class TeamMemberDetailsEditComponent implements OnInit {

  
  constructor(private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params => {
      console.log(params);
      
    })
  }
}
