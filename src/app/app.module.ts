import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PatientListComponent } from './patientlist/patientlist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetComponent } from './reset/reset.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientregComponent } from './patientreg/patientreg.component';
import { MainadminComponent } from './mainadmin/mainadmin.component';
import { ConfirmDonarComponent } from './confirm-donar/confirm-donar.component';
import { DonarManagementComponent } from './donar-management/donar-management.component';
import { AssigndonarComponent } from './assigndonar/assigndonar.component';
import { RequestComponent } from './request/request.component';
import { ResetuserComponent } from './resetuser/resetuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FirstpageComponent,
    RegistrationComponent,
    HomepageComponent,
    PatientListComponent,
    AdminloginComponent,
    ResetComponent,
    LogoutComponent,
    PatientregComponent,
    MainadminComponent,
    ConfirmDonarComponent,
    DonarManagementComponent,
    AssigndonarComponent,
    RequestComponent,
    ResetuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
