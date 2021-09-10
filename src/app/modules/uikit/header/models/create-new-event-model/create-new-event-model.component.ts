import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-new-event-model',
  templateUrl: './create-new-event-model.component.html',
  styleUrls: ['./create-new-event-model.component.scss'],
})
export class CreateNewEventModelComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}
  authHandler() {
    var id = window.localStorage.getItem('role');

    if (id == 'admin' || id == 'facilitator' || id == 'player') {
      console.log(id);

      this.router.navigateByUrl('/dashboard/' + id + '/events/individualevent');
    }
  }
}
