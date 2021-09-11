import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-element',
  templateUrl: './teams-element.component.html',
  styleUrls: ['./teams-element.component.scss'],
})
export class TeamsElementComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  clickHandler() {
    var id = window.localStorage.getItem('role');

    if (id == 'admin' || id == 'facilitator' || id == 'player') {
      console.log(id);

      this.router.navigateByUrl('/dashboard/' + id + '/teams/team');
    }
  }
}
