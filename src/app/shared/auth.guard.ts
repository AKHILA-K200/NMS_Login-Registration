import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
 constructor (private auth :AuthService,private router:Router) {}
  canActivate(){
    if(this.auth.Isloggedin())
    {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
