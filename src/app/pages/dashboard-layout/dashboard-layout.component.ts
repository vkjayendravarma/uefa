import { Component, OnInit } from '@angular/core';
import { SidebarServiceService } from 'src/app/globalServices/sidebar-service.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  opened: boolean =true;
  constructor(private _sidebarService: SidebarServiceService) {}

  ngOnInit(): void {
    this._sidebarService.onSideBarChanged().subscribe((event: any) => {
      this.opened = event;
    });
  }
}
