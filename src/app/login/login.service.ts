import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, of, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LogInService {
private _messagesource=new Subject<string>();
message$=this._messagesource.asObservable();

  constructor(private http :HttpClient) { }
url ='http://164.52.200.24:6204/users/auth/login'
  logIn(message:any,password : any){

    return this.http.post<any>( this.url ,{
      "email":message.toString(),
      "password":password.toString()
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
