import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.css']
})
export class EditappointmentComponent implements OnInit {

  id;
rdv;
  constructor(private activateRouter:ActivatedRoute,private appointmentservice:AppointmentService,private router:Router) { 
    console.log(this.activateRouter.snapshot.params["id"])
    this.id=this.activateRouter.snapshot.params["id"]  }

  

  ngOnInit() {
    this.appointmentservice.findByid(this.id).subscribe(res=>{
    this.rdv=res
  })
  }

  updateRDV(){
    this.appointmentservice.updateRDV(this.rdv,this.id).subscribe(res=>{
   console.log(res)
  
    })
    this.router.navigate(["home/appointment"])
  
  }

}
