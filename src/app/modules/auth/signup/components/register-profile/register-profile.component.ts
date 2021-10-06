import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.scss']
})
export class RegisterProfileComponent implements OnInit {

  image: any;
  params: any;
  userDetails: any = {
    ass_type: 0
  };
  genders: any = [];

  profileSetup = false;
  response:any;
  apiLink = environment.apiUrl+'/api/';

	formError = '';
  loading = false;

  profileForm: FormGroup = this.fb.group({
    profile: [''],
    email: [''],
    f_name: ['', Validators.required],
    l_name: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    dependent: []
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
		private cd: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe(params => {
      this.params = params;
    });
  }

  ngOnInit(): void {
    this.setupProfile();
  }

	setupForm(response:any) {
    this.profileForm = this.fb.group({
      profile: [''],
      email: [response.user_details.reg_email],
      f_name: [response.user_details.reg_fname, Validators.required],
      l_name: [response.user_details.reg_lname, Validators.required],
      gender: ['', Validators.required],
      address: [response.user_details.user_postcode, Validators.required],
      dependent: []
    });
  }

	setupProfile() {
    let request = {
      user_id: window.atob(this.params.id)
    };
		this.formError = '';
    this.loading = true;
    
		return this.http.post(this.apiLink+'auth/get_details', request).toPromise().then(response => {
      this.response = response;
      this.loading = false;
      
      if(this.response.status == 0) {
				if(this.response.profile_filled && this.response.profile_filled == 1) this.profileSetup = true;
        this.formError = this.response.msg;
      } else {
        this.genders = this.response.genders;
        this.userDetails = this.response.user_details;
        this.setupForm(this.response);
      }
    });
  }

  profileImage(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        let img: any = reader.result
        this.image = this.sanitizer.bypassSecurityTrustUrl(img);
        this.cd.detectChanges()
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

	updateProfile() {
    let profileForm = this.profileForm.value;
    let request = {
      user_id: window.atob(this.params.id),
      f_name: profileForm.f_name,
      l_name: profileForm.l_name,
      gender: profileForm.gender,
      address: profileForm.address,
      dependent: profileForm.dependent
    };

		this.formError = '';
    this.loading = true;
    
		return this.http.post(this.apiLink+'auth/setup_player_profile', request).toPromise().then(response => {
      this.response = response;
      this.loading = false;
      
      if(this.response.status == 0) {
        this.formError = this.response.msg;
      } else {
        this.profileSetup = true;
      }
    });
  }

}
