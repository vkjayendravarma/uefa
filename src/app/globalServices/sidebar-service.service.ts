import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarServiceService {
  private sidebarToggler = new Subject<any>();

  toggleSideBar(message: boolean) {
    console.log(message);    
    this.sidebarToggler.next(message);
  }
  onSideBarChanged(): Observable<any> {
    return this.sidebarToggler.asObservable();
  }
}
