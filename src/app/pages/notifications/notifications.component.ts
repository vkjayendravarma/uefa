import { Component, OnInit } from '@angular/core';
import { SidebarServiceService } from 'src/app/globalServices/sidebar-service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  opened: boolean = true;
  constructor(private _sidebarService: SidebarServiceService) {}

  ngOnInit(): void {
    this._sidebarService.onSideBarChanged().subscribe((event: any) => {
      this.opened = event;
    });
  }
}
