import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { TagsPrototype } from 'src/app/prototypes/tags.interface';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatStepper } from '@angular/material/stepper';

@Component({
	selector: 'app-event-edit',
	templateUrl: './event-edit.component.html',
	styleUrls: ['./event-edit.component.scss'],
})
export class EventEditComponent implements OnInit {
	tags: TagsPrototype[] = [];
	showSpinners = true;
	showSeconds = false;
	stepHour = 1;
	stepMinute = 1;
	stepSecond = 1;
	selectable = true;
	removable = true;
	addOnBlur = true;

	params: any;
	response: any;
	eventDetails: any = {
		event_id: '',
		event_name: ''
	};
	baseUrl = environment.baseUrl;
	apiLink = environment.apiUrl + '/api/';

	loading = false;
	loadingPublish = false;
	formError = '';
	globalEventTypes: any = [];
	globalEventRegions: any = [];
	globalInstituteTypes: any = [];
	globalEventCategories: any = [];

	basicInfoForm: FormGroup = this.fb.group({
		institute: ['', Validators.required],
		event_type: ['', Validators.required],
		event_name: ['', Validators.required],
		event_cat: ['', Validators.required],
		event_program: [''],
		event_venue: ['', [
			Validators.required,
			Validators.maxLength(5000)
		]],
		start_date: ['', Validators.required],
		start_time: ['', Validators.required],
		end_date: ['', Validators.required],
		end_time: ['', Validators.required],
		reg_end_date: ['', Validators.required],
		reg_end_time: ['', Validators.required]
	});

	eventDetailsForm: FormGroup = this.fb.group({
		event_summary: ['', Validators.required]
	});

	eventPublishForm: FormGroup = this.fb.group({
		institute_type: ['', Validators.required],
		invitee_type: ['', Validators.required],
		region: ['', Validators.required],
		link: ['', Validators.required]
	});

	readonly separatorKeysCodes = [ENTER, COMMA] as const;
	Invitees: any = [];
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

	//status check
	isAuthenticated() {
		let authState: any = localStorage.getItem('AUTH_STATUS');
		if (!authState) return false;

		authState = parseInt(authState);
		return authState == 1;
	}
	async getUserDetails() {
		if (this.isAuthenticated()) {
			const type = localStorage.getItem('USER_TYPE');
			const token = localStorage.getItem('AUTH_TOKEN');
			const user: any = localStorage.getItem('USER_DATA');

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

	goBack(stepper: MatStepper) {
		this.formError = '';
		stepper.previous();
	}
	goForward(stepper: MatStepper, form: any) {
		this.formError = '';
		switch (form) {
			case 'basicInfo':
				if (this.basicInfoForm.invalid) this.saveBasicInfo();
				else stepper.next();
			break;

			case 'eventDetails':
				if (this.eventDetailsForm.invalid) this.saveDetailsInfo();
				else stepper.next();
			break;

			case 'publishDetails':
				if (this.eventPublishForm.invalid) this.savePublishInfo();
				else stepper.next();
			break;
		}
	}

	async ngOnInit() {
		await this.setupEvent();
	}

	async setupEvent() {
		let request = { id: this.params.event_id };
		this.loading = true;

		let userDetails = await this.getUserDetails(),
		token = userDetails.token ? userDetails.token : '';
		// Create header and append JWT token
		let headers = new HttpHeaders({
			'Authorization': `Bearer: ${token}`
		});
		headers.append('Authorization', token);

		let globalEventTypes: any = await this.http.post(this.apiLink + 'global/get_global_event_type', {}).toPromise(),
		globalEventCategories: any = await this.http.post(this.apiLink + 'global/get_global_event_category', {}).toPromise(),
		globalEventRegions: any = await this.http.post(this.apiLink + 'global/get_global_region', {}).toPromise(),
		globalInstituteTypes: any = await this.http.post(this.apiLink + 'global/get_global_inst_type', {}).toPromise();

		this.globalEventTypes = globalEventTypes.types;
		this.globalEventRegions = globalEventRegions.regions;
		this.globalInstituteTypes = globalInstituteTypes.types;
		this.globalEventCategories = globalEventCategories.types;

		return this.http.post(this.apiLink + 'event/get_details', request, { headers: headers }).toPromise().then(response => {
			this.response = response;
			this.loading = false;

			if (this.response.status == 0) {
				this.route.navigate(['/dashboard/admin/events'])
			} else {
				this.eventDetails = this.response.event;
				this.setupForm();
			}
		});
	}

	setupForm() {
		let event = this.eventDetails,
		regions: any = [],
		categories: any = [];
		event.regions.forEach((reg: any) => {
			regions.push(reg.region_id);
		});
		event.invitees.forEach((inv: any) => {
			this.Invitees.push(inv.invitee);
		});
		event.categories.forEach((cat: any) => {
			categories.push(cat.category_id);
		});
		for (const key in event) {
			const element = event[key];
			if (element == null || typeof (element) == 'undefined') event[key] = '';
		}

		this.basicInfoForm = this.fb.group({
			institute: [event.institute, Validators.required],
			event_type: [event.event_type, Validators.required],
			event_name: [event.event_name, Validators.required],
			event_cat: [categories, Validators.required],
			event_program: [event.event_program],
			event_venue: [event.event_venue, [
				Validators.required,
				Validators.maxLength(5000)
			]],
			start_date: [event.start_date, Validators.required],
			start_time: [event.start_time, Validators.required],
			end_date: [event.end_date, Validators.required],
			end_time: [event.end_time, Validators.required],
			reg_end_date: [event.reg_end_date, Validators.required],
			reg_end_time: [event.reg_end_time, Validators.required]
		});

		this.eventDetailsForm = this.fb.group({
			event_summary: [event.event_summary, Validators.required]
		});

		this.eventPublishForm = this.fb.group({
			institute_type: [event.institute_type, Validators.required],
			invitee_type: [this.Invitees, Validators.required],
			region: [regions, Validators.required],
			link: [this.baseUrl + '/' + event.event_link, Validators.required]
		});

		if (event.status == 1) {
			this.tags = [{
				name: 'Published',
				bgColor: '#A7D1A4',
			}];
		} else if (event.status == 2) {
			this.tags = [{
				name: 'Draft',
				bgColor: '#D5DFEF',
			}];
		}
	}

	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();
		if (value) this.Invitees.push(value);
		// Clear the input value
		event.chipInput!.clear();
	}
	remove(invitee: any): void {
		const index = this.Invitees.indexOf(invitee);
		if (index >= 0) this.Invitees.splice(index, 1);
	}

	async saveBasicInfo() {
		this.formError = '';
		if (this.basicInfoForm.invalid) {
			this.basicInfoForm.get('institute')?.markAsDirty();
			this.basicInfoForm.get('event_type')?.markAsDirty();
			this.basicInfoForm.get('event_name')?.markAsDirty();
			this.basicInfoForm.get('event_cat')?.markAsDirty();
			this.basicInfoForm.get('event_program')?.markAsDirty();
			this.basicInfoForm.get('event_venue')?.markAsDirty();
			this.basicInfoForm.get('start_date')?.markAsDirty();
			this.basicInfoForm.get('start_time')?.markAsDirty();
			this.basicInfoForm.get('end_date')?.markAsDirty();
			this.basicInfoForm.get('end_time')?.markAsDirty();
			this.basicInfoForm.get('reg_end_date')?.markAsDirty();
			this.basicInfoForm.get('reg_end_time')?.markAsDirty();
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
		let request = this.basicInfoForm.value;
		request['event_id'] = this.eventDetails.event_id;

		this.loading = true;
		this.response = await this.http.post(this.apiLink + 'event/save_basic_info', request, { headers: headers }).toPromise();
		this.loading = false;

		// if (this.response.status == 0) {
		// 	this.formError = this.response.msg;
		// }
	}
	async saveDetailsInfo() {
		this.formError = '';
		if (this.eventDetailsForm.invalid) {
			this.eventDetailsForm.get('event_summary')?.markAsDirty();
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
		let request = this.eventDetailsForm.value;
		request['event_id'] = this.eventDetails.event_id;

		this.loading = true;
		this.response = await this.http.post(this.apiLink + 'event/save_event_details', request, { headers: headers }).toPromise();
		this.loading = false;

		// if (this.response.status == 0) {
		// 	this.formError = this.response.msg;
		// }
	}
	async savePublishInfo() {
		this.formError = '';
		if (this.eventPublishForm.invalid) {
			this.eventPublishForm.get('institute_type')?.markAsDirty();
			this.eventPublishForm.get('invitee_type')?.markAsDirty();
			this.eventPublishForm.get('region')?.markAsDirty();
			this.eventPublishForm.get('link')?.markAsDirty();
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
		let request = this.eventPublishForm.value;
		request['event_id'] = this.eventDetails.event_id;

		this.loading = true;
		this.response = await this.http.post(this.apiLink + 'event/save_event_publish', request, { headers: headers }).toPromise();
		this.loading = false;

		// if (this.response.status == 0) {
		// 	this.formError = this.response.msg;
		// }
	}
	async publishEvent() {
		if (this.basicInfoForm.invalid) this.saveBasicInfo();
		if (this.eventDetailsForm.invalid) this.saveDetailsInfo();
		if (this.eventPublishForm.invalid) this.savePublishInfo();
		if (this.basicInfoForm.invalid || this.eventDetailsForm.invalid || this.eventPublishForm.invalid) {
			this.formError = 'Could not publish event, as there are errors in the form. Please check all the tabs.';
			return;
		}

		// Save the details of all tabs
		await this.saveBasicInfo();
		await this.saveDetailsInfo();
		await this.savePublishInfo();

		// Publish Event
		let userDetails = await this.getUserDetails(),
		token = userDetails.token ? userDetails.token : '';
		// Create header and append JWT token
		let headers = new HttpHeaders({
			'Authorization': `Bearer: ${token}`
		});
		headers.append('Authorization', token);
		// Crerate Request
		let request = { event_id: this.eventDetails.event_id };

		this.loading = true;
		this.response = await this.http.post(this.apiLink + 'event/publish_event', request, { headers: headers }).toPromise();
		this.loading = false;

		if (this.response.status == 0) {
			this.formError = this.response.msg;
		} else {
			this.route.navigate(['/dashboard/admin/events']);
		}
	}

	// Getter Functions
	get basicForm() {
		return this.basicInfoForm.controls;
	}
	get detailsForm() {
		return this.eventDetailsForm.controls;
	}
	get publishForm() {
		return this.eventPublishForm.controls;
	}
}
