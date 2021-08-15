import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SidebarServiceService } from 'src/app/globalServices/sidebar-service.service';
import { publish, tap } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-global-search-bar',
  templateUrl: './global-search-bar.component.html',
  styleUrls: ['./global-search-bar.component.scss']
})
export class GlobalSearchBarComponent implements OnInit {
  language: any;
  sidebarIsActive = true;
  constructor(private fb: FormBuilder, private sidebarService: SidebarServiceService) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    console.log('toggle');
    this.sidebarIsActive = !this.sidebarIsActive;
    this.sidebarService.toggleSideBar(this.sidebarIsActive);    
  }
}

