import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {TabMenuModule} from 'primeng/tabmenu';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    CalendarModule
    
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
