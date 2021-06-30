import { Component, OnInit } from '@angular/core';
import { OrdonnancementService } from '../service/ordonnancement.service';
import { Router } from '@angular/router';
import { AppointmentService } from '../service/appointment.service';
import { MedecinService } from '../service/medecin.service';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ordonnancement = {
    "NumOrdonnancement": "",
    "DateOrdonnancement": "",
    "nameofdoctor": "",
    "firstname": "",
    "lastname": "",
    "medicament": "",
    "Nombrefoisparjour": "",
    "age": "",
    "description": ""

  }
  rdv = {
    "name": "",
    "email": "",
    "nameofdoctor":"",
    "numRDV": "",
    "DateRDV": "",
    "HeureRDV": "",
    "phone": "",
    "injury": "",
    "medecin": "",
  }
  payment = {
   
    "accountname": "",
    "description": "",
    "type": "",
    "datepayment": "",
    "amount": "",
    "medecin": "",
  }
  user;

  medecin:any=[];

  constructor(private ordonnancementservice: OrdonnancementService, private appointmentservice: AppointmentService, private paymentservice: PaymentService, private medecinservice: MedecinService, private router: Router, private Medecinservice: MedecinService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }

  ngOnInit() {
    this.getallMedecin()

  }
  addOrdonnancement() {
    console.log(this.ordonnancement)

    this.ordonnancementservice.addOrdonnancement(this.ordonnancement).subscribe(res => {
      console.log(res)
      this.router.navigate(["/home/patient"])
    })
  }
  addRDV() {
    console.log(this.rdv)

    this.appointmentservice.addRDV(this.rdv).subscribe(res => {

      console.log("add rdv ", res["_id"])

      console.log("add to medecin ", this.rdv.medecin)

      
            this.medecinservice.addRDV({ medecin: this.rdv.medecin, rdv: res['_id'] }).subscribe(res => {
              console.log("add to medecin ", res)
      

               this.router.navigate(["home"])
            })
    })

    //  this.router.navigate(["home/appointment"])
  
}
getallMedecin() {
  this.medecinservice.getallMedecin().subscribe(res => {
    console.log("res of medecin ",res)
    this.medecin = res;

  })
}
addPayment() {
  console.log(this.payment)

  this.paymentservice.addPayment(this.payment).subscribe(res => {

    console.log("add payment ", res["_id"])

    console.log("add to medecin ", this.payment.medecin)

    
          this.medecinservice.addPayment({ medecin: this.payment.medecin, payment: res['_id'] }).subscribe(res => {
            console.log("add to medecin ", res)
    

             this.router.navigate(["home"])
          })
          
  })

  //  this.router.navigate(["home/appointment"])

}



}
