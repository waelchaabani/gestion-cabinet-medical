import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  id;
 rdv;
  RDV2;
  patients;
   user;
    constructor(private appointmentservice:AppointmentService,private Patientservice:PatientService) { }
  
    ngOnInit() {
      this.getallRDV()  
    
      this.user=JSON.parse(localStorage.getItem("medecin"))


      console.log("ookkkkkkkkkkkk ",this.user.rdv)

    }
  
  
    selectUser(id){
  
      console.log("idd",id)
  
      this.id=id;
    }
  getallRDV(){
    this.appointmentservice.getallRDV().subscribe(res=>{
      console.log(res)
      this.rdv=res;
      this.RDV2=this.rdv;
    })
  }
  getallPatient(){
    this.Patientservice.getallpatient().subscribe(res=>{
      console.log(res)
      this.patients=res;
      
    })
  }
  removeRDV(){
    this.appointmentservice.removeRDV(this.id).subscribe(res=>{
      console.log(res)
      this.getallRDV()
  
  })
  }
  Search(e){
    this.RDV2=this.rdv.filter(item=>item['name'].indexOf(e.target.value)>-1);
  }
}
