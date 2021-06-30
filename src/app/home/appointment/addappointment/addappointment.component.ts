import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit {

  rdv={
    "name":"",
  "email":"",
  "nameofdoctor":"",
  "numRDV":"",
  "DateRDV":"",
  "HeureRDV":"",
  "phone":"",
  "injury":""
  }
  
  
    constructor(private appointmentservice:AppointmentService,private router:Router) {
  
     }
  
    ngOnInit() {
    }
    addRDV(){
    console.log(this.rdv)
    
      this.appointmentservice.addRDV(this.rdv).subscribe(res=>{
    console.log(res)
    this.router.navigate(["home/appointment"])
      })
    }
  

}
