import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { MedecinService } from 'src/app/service/medecin.service';
import { PatientService } from 'src/app/service/patient.service';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  medecin;

  id;
  RDV;
  patients;
  payments;
  constructor(private appointmentservice: AppointmentService, private Medecinservice: MedecinService,private Patientservice:PatientService,private paymentservice:PaymentService) { }

  ngOnInit() {
    this.getallRDV()
    this.getallMedecin()
     this.getallPatient()
     this.getallPayment()


  }


  selectUser(id) {

    console.log("idd", id)

    this.id = id;
  }
  getallRDV() {
    this.appointmentservice.getallRDV().subscribe(res => {
      console.log(res)
      this.RDV = res
    })
  }
  removeRDV() {
    this.appointmentservice.removeRDV(this.id).subscribe(res => {
      console.log(res)
      this.getallRDV()

    })
  }
  getallMedecin() {
    this.Medecinservice.getallMedecin().subscribe(res => {
      console.log(res)
      this.medecin = res
      this.medecin.reverse()
    })
  }
  removeMedecin() {
    this.Medecinservice.removeMedecin(this.id).subscribe(res => {
      console.log(res)
      this.getallMedecin()

    })

  }
  getallPatient(){
    this.Patientservice.getallpatient().subscribe(res=>{
      console.log(res)
      this.patients=res
    })
  }
  removepatient(){
    this.Patientservice.removepatient(this.id).subscribe(res=>{
      console.log(res)
      this.getallPatient()
  
  })
  }
  
  getallPayment(){
    this.paymentservice.getallPayment().subscribe(res=>{
      console.log(res)
      this.payments=res
    })
  }
}
