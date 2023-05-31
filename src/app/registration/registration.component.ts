import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RegistrationService } from './registration.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
interface emplcode {
  name: string,

}

interface result{
  optionId: number;
  label: string;
  option:string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  items: MenuItem[];
  activeItem: MenuItem;
  selectedOption:emplcode={
    name:"NE"
  };
  emp:emplcode={
    name:"sdsf"
  };
empcode_drplist :emplcode[]=[{
  name:"NE",
  
},
{
  name:"NTL",
}]

form_values:result={
  "optionId": 0,
  "label": "",
  "option": ""

}
alert_response:boolean=true;
alert_message:string="Error";

  constructor(private registrationservice:RegistrationService,private fb: FormBuilder,private router: Router,private messageservice : MessageService)
{
  this.items = [
    {label: 'profile'},
    {label: 'Punchcard'},
    {label: ' Quotas & Balance'},
    {label: 'Vacation Log'},
    {label: 'Pending Leaves'},
    {label:'Projects'},
    {label:'Documents'}
];

this.activeItem = this.items[0];

this.getmanager();
this.getgender();
this.getdepartment();
this.getbuddy();
this.getprojects();
this.getdesignation();
this.getprobationperiod();
this.getWorkstatus();
this.getProbationStatus();
this.getEmpType();
this.getempcode();

}

Config :{  "optionId": number,
  "label": string,
  "option": string}[]= [{
    "optionId": 0,
    "label": "",
    "option": ""
}];

gender :{  "optionId": number,
  "label": string,
  "option": string}[]= [{
    "optionId": 0,
    "label": "",
    "option": ""
}];

department :{  "optionId": number,
  "label": string,
  "option": string}[]= [{
    "optionId": 0,
    "label": "",
    "option": ""
}];

buddy:{
  "id": string;
      "employeeCode": string;
      "name": string;
    "lastName":string
}[]=[{
  "id": "",
  "employeeCode": "",
  "name": "",
  "lastName": ""
}];


project :{  "optionId": number,
  "label": string,
  "option": string}[]= [{
    "optionId": 0,
    "label": "",
    "option": ""
}];

designation :{  "optionId": number,
  "label": string,
  "option": string}[]= [{
    "optionId": 0,
    "label": "",
    "option": ""
}];


probationperiod :{  "optionId": number,
  "label": string,
  "option": string}[]= [{
    "optionId": 0,
    "label": "",
    "option": ""
}];


workstatus :{  "optionId": number;
  "label": string;
  "option": string}[]= [{
    "optionId": 0,
    "label": "",
    "option": ""
}];

probationstatus :{  "optionId": number;
  "label": string;
  "option": string}[]= [{
    "optionId": 0,
    "label": "",
    "option": ""
}];

employmenttype :{  "optionId": number;
  "label": string;
  "option": string}[]= [{
    "optionId": 0,
    "label": "",
    "option": ""
}];
empcode:{
  success:boolean,
  message:string,
  statusCode:string,
  data:string
}={
  "success": true,
  "message": "",
  "statusCode": "OK",
  "data": "NE108"
}


matches:any;
showSuccess() {
  this.messageservice.add({key: 'bc',severity:'success', summary: 'Success', detail: this.alert_message});
  this.registrationForm.reset();

}
showError() {
  this.messageservice.add({key: 'bc',severity:'error', summary: 'Error', detail: this.alert_message});
}
  getmanager(){
    this.registrationservice.Ongetmanager().subscribe((res) => {
this.Config=res;

    } )
  };

  getgender(){
    this.registrationservice.Ongetgender().subscribe((res)=>{
      this.gender=res;
    })
  }

  getdepartment(){
    this.registrationservice.OngetDepartment().subscribe((res)=>{
      this.department=res;
    })
  }

  getbuddy(){
    this.registrationservice.OngetBuddy().subscribe((res)=>{
      this.buddy=res;
    })
  }

  getprojects(){
    this.registrationservice.OngetProjects().subscribe((res)=>{
      this.project=res;
    })
  }
  
  getdesignation(){
    this.registrationservice.OngetDesignation().subscribe((res)=>{
      this.designation=res;
    })
  }
  

  getprobationperiod(){
    this.registrationservice.OngetProbabtionPeriod().subscribe((res)=>
    {
      this.probationperiod=res;
    })
  }

  getWorkstatus(){
    this.registrationservice.OngetWorkStatus().subscribe((res)=>{
          this.workstatus=res;
    })
  }

  getProbationStatus(){
    this.registrationservice.OngetProbationStatus().subscribe((res)=>{
      this.probationstatus=res;
    })
  }

  getEmpType(){
    this.registrationservice.Ongetemploymenttype().subscribe((res)=>{
      this.employmenttype=res;
    })
  }

  registrationForm=this.fb.group({
    fcn_firstName:['',[Validators.required]],
    fcn_lastName:['',[Validators.required]],
    fcn_dob:[''],
    fcn_gender:['',[Validators.required]],
    fcn_email:['',[Validators.required,Validators.email]],
    fcn_mobile:['',[Validators.required]],
    fcn_joiningDate:[''],
    fcn_empcode:['',[Validators.required]],
    fcn_empcno:['',[Validators.required]],
    fcn_address:[''],
    fcn_emptype:[''],
    fcn_designation:[''],
    fcn_department:['',[Validators.required]],
    fcn_project:[''],
    fcn_buddy:[''],
    fcn_manager:[''],
    fcn_prbstatus:[''],
    fcn_probperiod:[''],
    fcn_workstatus:[''],
    fcn_salary:[''],
    fcn_Dwrkhours:[''],
    fcn_wwrkhour:[''],
    fcn_pan:['ABCDE1234F'],
    fcn_adhar:['000000000000'],
    submit:[]
    
  });

  getempcode(){
     this.emp=this.selectedOption;
     console.log(this.selectedOption);
    this.registrationservice.OngetEmployeeCode(this.emp.name).subscribe((res)=>{
      this.empcode=res;
      this.matches=(this.empcode.data).match(/(\d+)/);
      this.registrationForm.patchValue({
        fcn_empcno:this.matches[0]
      });
    })
  }


 Onsubmit(){

  if (this.registrationForm.status == 'INVALID') {
    console.log(this.registrationForm)
    return false;

  }
  else {
   
    this.registrationservice.onSubmitform(this.registrationForm).subscribe((res)=>{
      console.log(res);
      if(res.success==true){
        console.log("API success");
        this.alert_message=res.message;
        this.showSuccess();
         }
       else if(res.error[0].message=="email already taken")
       {
        console.log("API failure");
        this.alert_response=false;
        this.alert_message=res.error[0].message;
         this.showError();
       }

    })

    if(this.alert_response==true)
    {
      console.log(this.registrationForm);
      this.registrationservice.onSubmitform(this.registrationForm)
     
      return true;

    }
    else {
      return false;
    }

    }
  }
}
