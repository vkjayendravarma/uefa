import { Component, OnInit } from '@angular/core';
import { SideBarItemsPrototype } from 'src/app/prototypes/sidebarItems.interface';

@Component({
  selector: 'app-side-nav-dashboard-layout',
  templateUrl: './side-nav-dashboard-layout.component.html',
  styleUrls: ['./side-nav-dashboard-layout.component.scss'],
})
export class SideNavDashboardLayoutComponent implements OnInit {
  currentSideBar: SideBarItemsPrototype[] = [];
  user = 'facilitator';

  sidebarAdmin: SideBarItemsPrototype[] = [
    {
      label: 'Home',
      link: '/dashboard/admin/home',
      icon: 'home',
    },
    {
      label: 'Associations',
      link: '/dashboard/admin/associations',
      icon: 'teams',
    },
    {
      label: 'Posts',
      link: '/dashboard/admin/posts',
      icon: 'posts',
    },
    {
      label: 'Events',
      link: '/dashboard/admin/events',
      icon: 'events',
    },
    {
      label: 'Surveys',
      link: '/dashboard/admin/surveys',
      icon: 'surveys',
    },
    {
      label: 'Tournaments',
      link: '/dashboard/admin/tournaments',
      icon: 'tournaments',
    },
  ];

  sidebarFacilitators: SideBarItemsPrototype[] = [
    {
      label: 'Home',
      link: '/dashboard/facilitator/home',
      icon: 'home',
    },
    {
      label: 'Teams',
      link: '/dashboard/facilitator/teams',
      icon: 'teams',
    },
    {
      label: 'Events',
      link: '/dashboard/facilitator/events',
      icon: 'events',
    },
    {
      label: 'Posts',
      link: '/dashboard/facilitator/posts',
      icon: 'posts',
    },

    {
      label: 'Surveys',
      link: '/dashboard/facilitator/surveys',
      icon: 'surveys',
    },
    {
      label: 'Tournaments',
      link: '/dashboard/facilitator/tournaments',
      icon: 'tournaments',
    },
    {
      label: 'People',
      link: '/dashboard/facilitator/people',
      icon: 'people',
    },
  ];

  sidebarPlayers: SideBarItemsPrototype[] = [
    {
      label: 'Home',
      link: '/dashboard/player/home',
      icon: 'home',
    },
    {
      label: 'Events',
      link: '/dashboard/player/events',
      icon: 'events',
    },
    {
      label: 'Posts',
      link: '/dashboard/player/posts',
      icon: 'posts',
    },

    {
      label: 'Surveys',
      link: '/dashboard/player/surveys',
      icon: 'surveys',
    },
    {
      label: 'Tournaments',
      link: '/dashboard/player/tournaments',
      icon: 'tournaments',
    },
  ];

  sideBar2: SideBarItemsPrototype[] = [
    {
      label: 'Notifications',
      link: '/notifications',
      icon: 'notifications',
    },
    {
      label: 'Manage Users',
      link: '/dashboard/admin/users',
      icon: 'user',
    },
    {
      label: 'Logout',
      link: '/auth/session/login',
      icon: 'logout',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.sideBarManager();
  }

  sideBarManager(): void {
    let currentUserRole = window.localStorage.getItem('role');
    if (currentUserRole == 'admin') {
      this.currentSideBar = this.sidebarAdmin;
      return;
    }
    if (currentUserRole == 'facilitator') {
      this.currentSideBar = this.sidebarFacilitators;
      return;
    }
    if (currentUserRole == 'player') {
      this.currentSideBar = this.sidebarPlayers;
      return;
    }
  }
}
