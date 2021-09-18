import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-success',
  templateUrl: './signup-success.component.html',
  styleUrls: ['./signup-success.component.scss']
})
export class SignupSuccessComponent implements OnInit {

  id: any;
  params: any;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe(params => {
      this.params = JSON.parse(window.atob(params.data));
    });
  }

  ngOnInit(): void {
    if(this.params.user_id) {
      this.id = window.btoa(this.params.user_id);
    } else {
      this.id = window.btoa(this.params.id);
    }
  }

}
