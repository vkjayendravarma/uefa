import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player-signup-success',
  templateUrl: './player-signup-success.component.html',
  styleUrls: ['./player-signup-success.component.scss'],
})
export class PlayerSignupSuccessComponent implements OnInit {
  selected: any;
	
	id:any;
	response:any;
  apiLink = environment.apiUrl+'/api/';

	formError = '';
  loading = false;

  constructor(
		private router: Router,
		private http: HttpClient,
    private activeRoute: ActivatedRoute
	) {
    this.selected = 7;

		this.activeRoute.params.subscribe(params => {
			this.id = window.atob(params.id);
    });
  }

  ngOnInit(): void {}

  setSelected(option: any) {
    this.selected = option;
  }

	async updateRole() {
		let request = {
      user_id: this.id,
			role: this.selected
    };
		this.loading = true;
    
		return this.http.post(this.apiLink+'auth/update_user_role', request).toPromise().then(response => {
      this.response = response;
      this.loading = false;
      
      if(this.response.status == 0) {
        this.formError = this.response.msg;
      } else {
				let id = window.btoa(this.id);
				// Navigate to onboarding process for the player
        this.router.navigate(['/onboard/player-register-profile', id]);
      }
    });
	}
}
