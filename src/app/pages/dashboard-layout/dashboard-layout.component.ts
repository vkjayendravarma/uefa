import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { SidebarServiceService } from 'src/app/globalServices/sidebar-service.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  opened: boolean = true;
  sideNavMode: MatDrawerMode = 'side';
  constructor(private _sidebarService: SidebarServiceService) {}

  ngOnInit(): void {
    this._sidebarService.onSideBarChanged().subscribe((event: any) => {
      this.opened = event;
    });
    console.log(window.screen.width);
    
    if (window.screen.width < 1030) {
      this.opened = false;
      this.sideNavMode = 'over'
    }
  }

  openevent(event:any){
    if (window.screen.width < 1030) {      
      if(event == false){
        console.log("backdrop close");        
        this._sidebarService.toggleSideBar(false);
      }
    }
  }
}
