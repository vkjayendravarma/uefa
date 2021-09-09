import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent implements OnInit {
  hide = true;
  authType: string | undefined;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);

      if (params['authType'] == 'signup' || params['authType'] == 'login') {
        this.authType = params['authType'];
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }

  authHandler(id:string){
    console.log(id);
    if(id=='admin' || id=='facilitator' || id=='player'){
      console.log(id);      
      window.localStorage.setItem('role', id);
      this.router.navigateByUrl('/dashboard/'+id+'/home')
    }
  }
}
