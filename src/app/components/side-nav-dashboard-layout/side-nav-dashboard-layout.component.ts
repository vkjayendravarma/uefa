import { Component, OnInit } from '@angular/core';
import { SideBarItemsPrototype } from 'src/app/prototypes/sidebarItems.interface';

@Component({
  selector: 'app-side-nav-dashboard-layout',
  templateUrl: './side-nav-dashboard-layout.component.html',
  styleUrls: ['./side-nav-dashboard-layout.component.scss']
})
export class SideNavDashboardLayoutComponent implements OnInit {

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
  ]

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
    }
  ]


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
    }
  ]

  mainSidebar: SideBarItemsPrototype[] = [];

  constructor() { }

  async ngOnInit() {
    let userDetails = await this.getUserDetails();
    switch (userDetails.type) {
      case 'national':
        this.mainSidebar = this.sidebarAdmin;
      break;

      case 'facilitator':
        this.mainSidebar = this.sidebarFacilitators;
      break;

      case 'players-parents':
        this.mainSidebar;
      break;
    }
  }

  //status check
  isAuthenticated() {
    let authState:any = localStorage.getItem('AUTH_STATUS');
    if(!authState) return false;

    authState = parseInt(authState);
    return authState == 1;
  }
  async getUserDetails() {
    if(this.isAuthenticated()) {
      const type = localStorage.getItem('USER_TYPE');
      const token = localStorage.getItem('AUTH_TOKEN');
      const user:any = localStorage.getItem('USER_DATA');

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

  async logout() {
    localStorage.removeItem('USER_DATA');
    localStorage.removeItem('USER_TYPE');
    localStorage.removeItem('AUTH_TOKEN');
    localStorage.removeItem('AUTH_STATUS');
    
    window.location.reload();
  }

}
