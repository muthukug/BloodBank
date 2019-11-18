import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PatientListComponent } from './patientlist/patientlist.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { ResetComponent } from './reset/reset.component';
import { LogoutComponent } from './logout/logout.component';
import { PatientregComponent } from './patientreg/patientreg.component';
import { MainadminComponent } from './mainadmin/mainadmin.component';
import { AuthAdmin } from './services/authadmin.service';
import { ConfirmDonarComponent } from './confirm-donar/confirm-donar.component';
import { DonarManagementComponent } from './donar-management/donar-management.component';
import { AssigndonarComponent } from './assigndonar/assigndonar.component';
import { RequestComponent } from './request/request.component';
import { ResetuserComponent } from './resetuser/resetuser.component';
import { FbLikeComponent } from './fb-like/fb-like.component';
import { OpenpageComponent } from './openpage/openpage.component';
import { AboutComponent } from './about/about.component';
import { FactsComponent } from './facts/facts.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/openpage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'firstpage', component: FirstpageComponent, canActivate: [AuthGaurdService] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'patientlist', component: PatientListComponent, canActivate: [AuthAdmin] },
  { path: 'reset', component: ResetComponent },
  { path: 'resetuser', component: ResetuserComponent },
  { path: 'patientreg', component: PatientregComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'mainadmin', component: MainadminComponent, canActivate: [AuthAdmin] },
  { path: 'confirmdonar', component: ConfirmDonarComponent, canActivate: [AuthGaurdService] },
  { path: 'donarmanagement', component: DonarManagementComponent, canActivate: [AuthAdmin] },
  { path: 'assigndonar', component: AssigndonarComponent, canActivate: [AuthAdmin] },
  { path: 'request', component: RequestComponent, canActivate: [AuthGaurdService] },
  { path: 'facebook', component: FbLikeComponent },
  { path: 'openpage', component: OpenpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'facts', component: FactsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


