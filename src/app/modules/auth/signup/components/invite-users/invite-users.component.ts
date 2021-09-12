import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-invite-users',
  templateUrl: './invite-users.component.html',
  styleUrls: ['./invite-users.component.scss']
})
export class InviteUsersComponent implements OnInit {

  params: any;
  response:any;
  userDetails:any = {
    child_ass: []
  };
  apiLink = apiUrl+'/api/';

  associationTypes = [
    {id: 1, label: 'National'},
    {id: 2, label: 'Regional'}
  ];

  inviteForm:FormGroup = this.fb.group({
    invites: this.fb.array([])
  });

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  inviteSent = false;
  loading = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.activeRoute.params.subscribe((params: any) => {
      this.params = params;
    });
  }

  ngOnInit(): void {
    this.inviteForm = this.fb.group({
      invites: this.fb.array([this.addInviteGroup()])
    });

    this.setupProfile();
  }

  setupProfile() {
    let request = {
      invitehash: this.params.invitehash
    };
    this.loading = true;
    return this.http.post(this.apiLink+'invite/get_details_for_invite', request).toPromise().then(response => {
      this.response = response;
      this.loading = false;
      
      if(this.response.status == 0) {
        // this.toastr.error(this.response.msg, 'Error!', {
        //   timeOut: 5000,
        // });
        // return false;

        // If profile is not setup redirect to profile setup page
        if(this.response.profile_filled && this.response.profile_filled == 0) {
          this.router.navigate(['/onboard/create-profile/', this.params.invitehash]);
        }
      } else {
        this.userDetails = this.response.user_details;
      }
    });
  }

  setVisibility(group:FormControl) {
    if(group.get('association')?.value == 2) {
      group.get('showRegion')?.setValue(true);
    } else {
      group.get('showRegion')?.setValue(false);
    }
  }

  addInviteGroup() {
    return this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]],
      association: ['', Validators.required],
      region: [''],
      showRegion: [false]
    });
  }
  addInvite() {
    // Block to max 5 invites
    if(this.invites.controls.length >= 5) {
      // Show toaster message
      return;
    }
    
    this.invites.push(this.addInviteGroup());
  }
  removeInvite(index:any) {
    this.invites.removeAt(index);
  }

  inviteUsers() {
    let inviteForm = this.inviteForm.value;
    let request = {
      invitehash: this.params.invitehash,
      invites: inviteForm.invites
    };

    this.loading = true;
    return this.http.post(this.apiLink+'invite/send_invites', request).toPromise().then(response => {
      this.response = response;
      this.loading = false;
      
      if(this.response.status && this.response.status == 1) this.inviteSent = true;
    });
  }
  
  loginUser() {}


  // Getter Methods
  get invites() {
    return <FormArray>this.inviteForm.get('invites');
  }

}
