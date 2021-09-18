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
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent implements OnInit {
  hide = true;
  authType: string | undefined;

  response:any;
  apiLink = apiUrl+'/api/';

  loading = false;
  formError = '';

  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
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
      } else {
        this.router.navigateByUrl('/');
      }
    });

    this.setupPage();
  }

  setupPage() {
    this.loading = false;

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm.updateValueAndValidity();
  }

  async login() {
    let request = this.loginForm.value;
    this.loading = true;
    this.formError = '';
    
    this.http.post(this.apiLink+'auth/login', request).toPromise().then(response => {
      this.response = response;

      if(this.response.status == 0) {
        this.loading = false;
        this.formError = this.response.msg;
      } else {
        // Setup profile details in the local machine
        localStorage.setItem(AUTH_STATUS, '1');
        localStorage.setItem(USER_TYPE, this.response.type);
        localStorage.setItem(AUTH_TOKEN, this.response.token);
        localStorage.setItem(USER_DATA, JSON.stringify(this.response.user[0]));

        // Redirect to the dashboard of the user according to logged in role
        switch (this.response.type) {
          case 'productadmin':
            this.router.navigate(['productadmin']);
          break;

          case 'national':
            this.router.navigate(['/dashboard/admin/home']);
          break;

          case 'facilitator':
            this.router.navigate(['/dashboard/facilitator/home']);
          break;
          
          case 'parent':
          case 'player':
            this.router.navigate(['/dashboard/player/home']);
          break;
        
          default:
          break;
        }
      }
    });
  }
}
