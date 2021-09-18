import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  image: any;
  params: any;
  userDetails: any = {
    ass_type: 0
  };
  genders: any = [];

  profileSetup = false;
  response:any;
  apiLink = apiUrl+'/api/';

  loading = false;

  profileForm: FormGroup = this.fb.group({
    profile: [''],
    ass_email: [''],
    ass_name: [''],
    f_name: ['', Validators.required],
    l_name: ['', Validators.required],
    email: [''],
    password: ['', Validators.required],
    c_password: ['', Validators.required],
    gender: ['', Validators.required],
    region: ['', Validators.required],
    dob: ['', Validators.required],
    role: [],
    act_code: ['', Validators.required]
  });

  constructor(
    private cd: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.activeRoute.params
      .subscribe(params => {
        this.params = params;
      }
    );
  }

  ngOnInit(): void {
    this.setupProfile();
  }

  setupForm(response:any) {
    this.profileForm = this.fb.group({
      profile: [''],
      ass_email: [response.user_details.ass_email],
      ass_name: [response.user_details.ass_name],
      f_name: [response.user_details.reg_fname, Validators.required],
      l_name: [response.user_details.reg_lname, Validators.required],
      email: [response.user_details.reg_email],
      password: ['', Validators.required],
      c_password: ['', Validators.required],
      gender: ['', Validators.required],
      region: [response.user_details.ass_region],
      dob: ['', Validators.required],
      role: [response.user_details.role_display_name],
      act_code: ['', Validators.required]
    })
  }

  setupProfile() {
    let request = {
      invitehash: this.params.invitehash
    };
    this.loading = true;
    return this.http.post(this.apiLink+'invite/get_details', request).toPromise().then(response => {
      this.response = response;
      this.loading = false;
      
      if(this.response.status == 0) {
        // this.toastr.error(this.response.msg, 'Error!', {
        //   timeOut: 5000,
        // });
        // return false;
        if(this.response.profile_filled && this.response.profile_filled == 1) this.profileSetup = true;
        this.userDetails.ass_type = this.response.ass_type;
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
        console.log(event.target.result);
        let img: any = reader.result
        this.image = this.sanitizer.bypassSecurityTrustUrl(img);
        console.log(this.image)
        this.cd.detectChanges()
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  updateProfile() {
    let profileForm = this.profileForm.value;
    let request = {
      invithash: this.params.invitehash,
      act_code: profileForm.act_code,
      f_name: profileForm.f_name,
      l_name: profileForm.l_name,
      password: profileForm.password,
      gender: profileForm.gender,
      dob: profileForm.dob
    };

    this.loading = true;
    return this.http.post(this.apiLink+'invite/setup_profile', request).toPromise().then(response => {
      this.response = response;
      this.loading = false;
      
      if(this.response.status == 0) {
        // this.toastr.error(this.response.msg, 'Error!', {
        //   timeOut: 5000,
        // });
        // return false;
      } else {
        this.profileSetup = true;
      }
    });
  }

}
