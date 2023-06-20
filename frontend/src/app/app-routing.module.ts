import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../app/components/pages/components/homepage/homepage.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { ContactComponent } from './components/pages/components/contact/contact.component';
import { AboutComponent } from './components/pages/components/about/about.component';

import { PatientComponent } from './components/pages/patient/patient.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';

const routes: Routes = [

  { path:'', component:HomepageComponent},
  {path:'appointment',component:AppointmentComponent},

  {path:'patient',component:PatientComponent},
  { path: 'doctor', loadChildren: () => import('../app/components/pages/doctor/doctor.module').then(m => m.DoctorModule) },

  {path:'home',component:HomepageComponent, canActivate:[AuthGuard]},
  {path:'contactus',component:ContactComponent},
  {path:'aboutus',component:AboutComponent},
  { path: 'admin',loadChildren: () => import('./components/pages/admin/admin.module').then(m => m.AdminModule) },
  { path: 'reception', loadChildren: () => import('../app/components/pages/reception copy/reception.module').then(m => m.ReceptionModule) },
  { path: 'fin', loadChildren: () => import('./components/pages/finance/finance.module').then(m => m.FinanceModule) },
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
