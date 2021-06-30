import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './home/layout/layout.component';
import { MedecinComponent } from './home/medecin/medecin.component';
import { AddmedecinComponent } from './home/medecin/addmedecin/addmedecin.component';
import { EditmedecinComponent } from './home/medecin/editmedecin/editmedecin.component';
import { PatientComponent } from './home/patient/patient.component';
import { AddpatientComponent } from './home/patient/addpatient/addpatient.component';
import { EditpatientComponent } from './home/patient/editpatient/editpatient.component';
import { AppointmentComponent } from './home/appointment/appointment.component';
import { AddappointmentComponent } from './home/appointment/addappointment/addappointment.component';
import { EditappointmentComponent } from './home/appointment/editappointment/editappointment.component';
import { ProfileComponent } from './home/profile/profile.component';
import { PaymentComponent } from './home/payment/payment.component';
import { AddpaymentComponent } from './home/payment/addpayment/addpayment.component';
import { ProfilepatientComponent } from './home/profilepatient/profilepatient.component';
import { LoginmedecinComponent } from './loginmedecin/loginmedecin.component';
import { RegistermedecinComponent } from './registermedecin/registermedecin.component';








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
