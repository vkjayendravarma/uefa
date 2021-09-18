import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WithoutAuthGuard implements CanActivate {

  constructor(private router: Router) { }
  
  canActivate(): boolean {
    let authState:any = localStorage.getItem('AUTH_STATUS');
    if(!authState) {
      return true;
    } else {
      const type = localStorage.getItem('USER_TYPE');
      switch (type) {
        case 'productadmin':
          this.router.navigate(['productadmin']);
          return false;
        break;

        case 'national':
          this.router.navigate(['/dashboard/admin/home']);
          return false;
        break;
        
        case 'facilitator':
          this.router.navigate(['/dashboard/facilitator/home']);
          return false;
        break;

        case 'parent':
        case 'player':
          this.router.navigate(['/dashboard/player/home']);
          return false;
        break;
      }

      return true;
    }
  }
  
}
