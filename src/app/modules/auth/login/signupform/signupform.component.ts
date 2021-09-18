import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

const AUTH_TOKEN = "AUTH_TOKEN",
AUTH_STATUS = 'AUTH_STATUS',
USER_TYPE = "USER_TYPE",
USER_DATA = "USER_DATA";

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {

  hide = true;
  authType: string | undefined;

  response:any;
  apiLink = apiUrl+'/api/';

  loading = false;
  formError = '';

  roles = [
    { role_id: 5, role_name: 'Facilitator' },
    { role_id: 6, role_name: 'Coach' },
    { role_id: 8, role_name: 'Player' }
  ]

  signupForm: FormGroup = this.fb.group({
    dob: ['', Validators.required],
    role: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    agree: [false, Validators.required]
  });
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);

      if (params['authType'] == 'signup' || params['authType'] == 'login') {
        this.authType = params['authType'];
      }
    });

    this.setupPage();
  }

  setupPage() {
    this.loading = false;

    this.signupForm = this.fb.group({
      dob: [''],
      role: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      agree: [false, Validators.required]
    });
    this.signupForm.updateValueAndValidity();
  }

  setupDobValidation(event:any) {
    if(event.target.value == 8) {
      this.dob?.setValidators([Validators.required])
    } else {
      this.dob?.setValidators(null);
    }
    this.dob?.updateValueAndValidity();
  }

  async signup() {
    let request = this.signupForm.value;
    this.loading = true;
    this.formError = '';
    
    this.http.post(this.apiLink+'auth/signup', request).toPromise().then(response => {
      this.response = response;

      if(this.response.status == 0) {
        this.loading = false;
        this.formError = this.response.msg;
      } else {
        let data = {
          id: this.response.user_id,
          msg: this.response.msg,
          role: this.role?.value
        };
        // Navigate to onboarding process for the player
        this.router.navigate(['/auth/success/', window.btoa(JSON.stringify(data))]);
      }
    });
  }

  // Getter Functions
  get dob() {
    return this.signupForm.get('dob');
  }
  get role() {
    return this.signupForm.get('role');
  }
  get agree() {
    return this.signupForm.get('agree');
  }

}
