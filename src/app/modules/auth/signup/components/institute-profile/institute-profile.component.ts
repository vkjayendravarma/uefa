import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-institute-profile',
  templateUrl: './institute-profile.component.html',
  styleUrls: ['./institute-profile.component.scss'],
})
export class InstituteProfileComponent implements OnInit {
  params: any;
	response: any;
	apiLink = environment.apiUrl + '/api/';

	formError = '';
	loading = false;
	userDetails = {
		user_role: '',
		role_display_name: ''
	};
  instituteCreted = false;
	globalEventRegions: any = [];
	globalInstituteTypes: any = [];

  instForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
		region: ['', Validators.required],
		inst_type: ['', Validators.required],
		location: ['', Validators.required],
    doe:  ['', Validators.required]
	});

  constructor(
    private route: Router,
		private fb: FormBuilder,
		private http: HttpClient,
		private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe(params => {
			this.params = params;
		});
  }

  ngOnInit(): void {
    this.setupForm();
		this.getInitialData();
  }

  async setupForm() {
		this.instForm = this.fb.group({
			name: ['', Validators.required],
      region: ['', Validators.required],
      inst_type: ['', Validators.required],
      location: ['', Validators.required],
      doe:  ['', Validators.required]
		});
		this.instForm.updateValueAndValidity();

		this.formError = '';
		this.loading = false;
	}

	async getInitialData() {
		this.loading = true;
		
		let globalEventRegions: any = await this.http.post(this.apiLink + 'global/get_global_region', {}).toPromise(),
		globalInstituteTypes: any = await this.http.post(this.apiLink + 'global/get_global_inst_type', {}).toPromise();

    this.loading = false;
		this.globalEventRegions = globalEventRegions.regions;
		this.globalInstituteTypes = globalInstituteTypes.types;
	}

  createInstitute() {
    let request = this.instForm.value;
    request['user_id'] = window.atob(this.params.id);

    this.loading = true;
    return this.http.post(this.apiLink + 'institute/create_inst_witout_login', request).toPromise().then(response => {
			this.response = response;
      this.loading = false;

			if (this.response.status == 0) {
				this.formError = this.response.msg;
			} else {
        this.instituteCreted = true;
			}
		});
  }
}
