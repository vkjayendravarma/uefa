import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WithAuthGuard implements CanActivate {

  constructor(private router: Router) { }
  
  canActivate(): boolean {
    let authState:any = localStorage.getItem('AUTH_STATUS');
    if(!authState) {
      this.router.navigate(['/']);
      return false;
    } else return true;
  }
  
}
