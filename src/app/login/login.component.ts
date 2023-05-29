import { Component } from '@angular/core';
import { FormControl,FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LogInService } from './login.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  alert_response:boolean=true;
  alert_message:string="Error";
  password_pattern = "(?=.*[a-z])";

  constructor(private messageservice:MessageService,private loginservice:LogInService,private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

loginform = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
  cross_icon:[''],
 
}); 

showError() {
  this.messageservice.add({key: 'bc',severity:'error', summary: 'Error', detail: this.alert_message});
}

onLogin() {
  console.log("form", this.loginform);


   if (this.loginform.status == 'INVALID') {
     console.log("if case");

     return false;

   }
   else {   
           this.loginservice.logIn(this.loginform.value.email,this.loginform.value.password).subscribe((res) => {
        
           if(res.success==true){
             console.log("reponse object",res);
               this.router.navigate(['/registration']);
                localStorage.setItem('token',res.data.access_token)  ;
                console.log(localStorage.getItem('token'));
              }
            else if(res.error.success==false)
            {
             
             this.alert_response=false;
             this.alert_message=res.error.message;
              this.showError();
            }
   
         })
           if(this.alert_response==true)
           {
             
                     return true;

           }
           else {
             return false;
           }
           

   }





}

}
