import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';

const routes:Routes=[
  {
    path:'login',component:LoginComponent
  },
  {
    path:'registration',component:RegistrationComponent,canActivate: [AuthGuard]
  },
  {
    path:'**',component:LoginComponent
  },
  {
    path:'',component:LoginComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
