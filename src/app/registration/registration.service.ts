import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Subject, catchError, of, throwError } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';


type response =[ {
  optionId: number;
  label: string;
  option:string;
}];

interface result{
  optionId: number;
  label: string;
  option:string;
}
type empcd={
  success:boolean,
  message:string,
  statusCode:string,
  data:string
}


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  form_values:result={
    "optionId": 17,
    "label": "manager",
    "option": "Sanoj"
  
  }
  private _messagesource=new Subject<string>();
  message$=this._messagesource.asObservable();
 
  constructor(private http :HttpClient) { }
  url_manager ='http://164.52.200.24:6204/options/get-options?label=manager';
  url_gender='http://164.52.200.24:6204/options/get-options?label=gender';
  url_department='http://164.52.200.24:6204/options/get-options?label=department';
  url_buddy='http://164.52.200.24:6204/options/get-options/buddy';
  url_projects='http://164.52.200.24:6204/options/get-options?label=projects';
  url_designation='http://164.52.200.24:6204/options/get-options?label=designation';
  url_probabtioperiod='http://164.52.200.24:6204/options/get-options?label=probationPeriod';
  url_workstatus='http://164.52.200.24:6204/options/get-options?label=workStatus';
  url_probationstatus='http://164.52.200.24:6204/options/get-options?label=probationStatus';
  url_employmenttype='http://164.52.200.24:6204/options/get-options?label=employmentType';
  url_registration='http://164.52.200.24:6204/employees/create';
  url_employeecode='http://164.52.200.24:6204/employees/employee-code';


    Ongetmanager(){

     return this.http.get<response>( this.url_manager ,{
    });

    }

    Ongetgender(){

      return this.http.get<response>( this.url_gender ,{
     });
     }


     OngetDepartment(){
           
      return this.http.get<response>( this.url_department ,{
     });
     }

     OngetBuddy(){

      return this.http.get<{ "id": string;
      "employeeCode": string;
      "name": string;
    "lastName":string}[]>( this.url_buddy ,{
     });
     }

     OngetProjects(){


      return this.http.get<response>(this.url_projects,{});
     }

     OngetDesignation(){
      return this.http.get<response>(this.url_designation,{});
     }

     OngetProbabtionPeriod(){
      return this.http.get<response>(this.url_probabtioperiod,{});
     }

     OngetWorkStatus(){
      return this.http.get<response>(this.url_workstatus,{})
     }

     OngetProbationStatus(){
      return this.http.get<response>(this.url_probationstatus,{})
     }

    Ongetemploymenttype(){
      return this.http.get<response>(this.url_employmenttype,{})
    }
 
    OngetEmployeeCode(empcode:string){

    return this.http.get<empcd>(this.url_employeecode + '?'+ 'employeeCode='+empcode);


    }
   
    onSubmitform(regform:any){
      
          this.form_values=regform.value.fcn_department; 
      return this.http.post<any>(this.url_registration,{
 
      "firstName":regform.value.fcn_firstName,
      "lastName":regform.value.fcn_lastName,
      "employeeCode":regform.value.fcn_empcode + regform.fcn_empcno,
      "email":regform.value.fcn_email,
      "phoneNumber":regform.value.fcn_mobile,
      "joiningDate":regform.value.fcn_joiningDate,
      "dateOfBirth":regform.value.fcn_dob,
      "dailyWorkHours":regform.value.fcn_Dwrkhours,
      "weeklyWorkHours":regform.value.fcn_wwrkhour,
      "employeeAddress":regform.value.fcn_address,
      "aadhaarNumber":regform.value.fcn_adhar,
      "panNumber":regform.value.fcn_pan,
      "options":[
            {
                "optionId":(this.form_values=regform.value.fcn_department).optionId,
                "option":(this.form_values=regform.value.fcn_department).option,
                "label":(this.form_values=regform.value.fcn_department).label
            },
      //       {
      //       "optionId": (this.form_values=regform.value.fcn_workstatus).optionId,
      //       "label": (this.form_values=regform.value.fcn_workstatus).label,
      //       "option": (this.form_values=regform.value.fcn_workstatus).option
      //      },
      //       {
      //         "optionId": (this.form_values=regform.value.fcn_manager).optionId,
      //         "label": (this.form_values=regform.value.fcn_manager).label,
      //         "option": (this.form_values=regform.value.fcn_manager).option
      //     },
            {
              "optionId": (this.form_values=regform.value.fcn_gender).optionId,
              "label": (this.form_values=regform.value.fcn_gender).label,
              "option": (this.form_values=regform.value.fcn_gender).option
          },
      //       {
      //         "optionId": (this.form_values=regform.value.fcn_emptype).optionId,
      //         "label": (this.form_values=regform.value.fcn_emptype).label,
      //         "option": (this.form_values=regform.value.fcn_emptype).option
      //     }, 
      //       {
      //         "optionId": (this.form_values=regform.value.fcn_probperiod).optionId,
      //         "label": (this.form_values=regform.value.fcn_probperiod).label,
      //         "option": (this.form_values=regform.value.fcn_probperiod).option
      //     },  
      //       {
      //         "optionId": (this.form_values=regform.fcn_prbstatus).optionId,
      //         "label": (this.form_values=regform.fcn_prbstatus).label,
      //         "option": (this.form_values=regform.fcn_prbstatus).option
      //     },  
      //     {
      //       "optionId": (this.form_values=regform.value.fcn_workstatus).optionId,
      //       "label": (this.form_values=regform.value.fcn_workstatus).label,
      //       "option": (this.form_values=regform.value.fcn_workstatus).option
      //   },  
                
        ]

      }).pipe(
        catchError((error:HttpErrorResponse)=>{

          return of(error)
        }),
        catchError((err)=>{
          return throwError(()=>{
            new Error(err);
          })
        })

      )
    }
}
