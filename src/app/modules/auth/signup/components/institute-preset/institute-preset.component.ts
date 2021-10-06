import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-institute-preset',
	templateUrl: './institute-preset.component.html',
	styleUrls: ['./institute-preset.component.scss']
})
export class InstitutePresetComponent implements OnInit {

	params: any;
	response: any;
	apiLink = environment.apiUrl + '/api/';

	formError = '';
	loading = false;
	userDetails = {
		user_role: '',
		role_display_name: ''
	};
	globalInstitutes: any = [];
	globalEventRegions: any = [];
	globalInstituteTypes: any = [];

	instForm: FormGroup = this.fb.group({
		region: ['', Validators.required],
		inst_type: ['', Validators.required],
		institute: ['', Validators.required]
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
			region: ['', Validators.required],
			inst_type: ['', Validators.required],
			institute: ['', Validators.required]
		});
		this.instForm.updateValueAndValidity();

		this.formError = '';
		this.loading = false;
	}

	async getInitialData() {
		let request = { user_id: window.atob(this.params.id) };
		this.loading = true;
		
		let globalEventRegions: any = await this.http.post(this.apiLink + 'global/get_global_region', {}).toPromise(),
		globalInstituteTypes: any = await this.http.post(this.apiLink + 'global/get_global_inst_type', {}).toPromise();

		this.globalEventRegions = globalEventRegions.regions;
		this.globalInstituteTypes = globalInstituteTypes.types;

		return this.http.post(this.apiLink + 'auth/get_details', request).toPromise().then(response => {
			this.response = response;

			if (this.response.status == 0) {
				this.formError = this.response.msg;
			} else {
				this.loading = false;
				this.userDetails = this.response.user_details;
			}
		});
	}

	async searchInstitutes() {
		if(this.region?.value.length === 0 || this.inst_type?.value.length === 0) {
			this.globalInstitutes = [];
			return;
		}
		
		let request = {
			region: this.region?.value,
			inst_type: this.inst_type?.value
		}
		let globalInstitutes: any = await this.http.post(this.apiLink + 'global/get_global_institute', request).toPromise();
		this.globalInstitutes = globalInstitutes.institutes;
	}

	sendJoiningRequest() {}

	
	// Getter Functions
	get region() {
		return this.instForm.get('region');
	}
	get inst_type() {
		return this.instForm.get('inst_type');
	}

}
