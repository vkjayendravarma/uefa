import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-new-event-model',
  templateUrl: './create-new-event-model.component.html',
  styleUrls: ['./create-new-event-model.component.scss']
})
export class CreateNewEventModelComponent implements OnInit {

  response:any;
  apiLink = environment.apiUrl+'/api/';

  loading = false;
  formError = '';
  globalEventTypes:any = [];

  eventForm: FormGroup = this.fb.group({
    institute: ['', Validators.required],
    event_type: ['', Validators.required],
    event_name: ['', Validators.required]
  });

  constructor(
    private route: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateNewEventModelComponent>
  ) { }

  async ngOnInit() {
    let userDetails = await this.getUserDetails(),
    token = userDetails.token ? userDetails.token : '';
    // Create header and append JWT token
    let headers = new HttpHeaders({
      'Authorization': `Bearer: ${token}`
    });
    headers.append('Authorization', token);
    
    let globalEventTypes:any = await this.http.post(this.apiLink+'global/get_global_event_type', {}).toPromise();
    this.globalEventTypes = globalEventTypes.types;
  }

  //status check
  isAuthenticated() {
    let authState:any = localStorage.getItem('AUTH_STATUS');
    if(!authState) return false;

    authState = parseInt(authState);
    return authState == 1;
  }
  async getUserDetails() {
    if(this.isAuthenticated()) {
      const type = localStorage.getItem('USER_TYPE');
      const token = localStorage.getItem('AUTH_TOKEN');
      const user:any = localStorage.getItem('USER_DATA');

      return {
        user: JSON.parse(user),
        token: token,
        type: type
      };
    }
    else {
      return {};
    }
  }

  async createEvent() {
    this.formError = '';
    if(this.eventForm.invalid) {
      this.institute?.markAsDirty();
      this.event_type?.markAsDirty();
      this.event_name?.markAsDirty();
      return;
    }

    let userDetails = await this.getUserDetails(),
    token = userDetails.token ? userDetails.token : '';
    // Create header and append JWT token
    let headers = new HttpHeaders({
      'Authorization': `Bearer: ${token}`
    });
    headers.append('Authorization', token);
    // Crerate Request
    let eventForm = this.eventForm.value;
    let request = {
      institute: eventForm.institute,
      event_type: eventForm.event_type,
      event_name: eventForm.event_name
    };

    this.loading = true;
    return this.http.post(this.apiLink+'event/create', request, {headers: headers}).toPromise().then(response => {
      this.response = response;
      this.loading = false;
      
      if(this.response.status == 0) {
        this.formError = this.response.msg;
      } else if(this.response.status == 1) {
        this.dialogRef.close();
        this.route.navigate(['/dashboard/admin/events/individualevent/', this.response.event_id]);
      }
    });
  }

  // Getter Functions
  get institute() {
    return this.eventForm.get('institute');
  }
  get event_type() {
    return this.eventForm.get('event_type');
  }
  get event_name() {
    return this.eventForm.get('event_name');
  }

}
