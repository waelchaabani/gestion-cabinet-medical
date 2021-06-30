import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule}from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NavbarComponent } from './home/navbar/navbar.component';
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
import { OrdonnancementComponent } from './home/ordonnancement/ordonnancement.component';
import { UsersComponent } from './home/users/users.component';
import { ProfileComponent } from './home/profile/profile.component';
import { PaymentComponent } from './home/payment/payment.component';
import { AddpaymentComponent } from './home/payment/addpayment/addpayment.component';
import { EditpaymentComponent } from './home/payment/editpayment/editpayment.component';
import { ProfilepatientComponent } from './home/profilepatient/profilepatient.component';
import { LoginmedecinComponent } from './loginmedecin/loginmedecin.component';
import { RegistermedecinComponent } from './registermedecin/registermedecin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    LayoutComponent,
    MedecinComponent,
    AddmedecinComponent,
    EditmedecinComponent,
    PatientComponent,
    AddpatientComponent,
    EditpatientComponent,
    AppointmentComponent,
    AddappointmentComponent,
    EditappointmentComponent,
    OrdonnancementComponent,
    UsersComponent,
    ProfileComponent,
    PaymentComponent,
    AddpaymentComponent,
    EditpaymentComponent,
    ProfilepatientComponent,
    LoginmedecinComponent,
    RegistermedecinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
