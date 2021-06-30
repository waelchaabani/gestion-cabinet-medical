import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {

  id;
patient;
  constructor(private activateRouter:ActivatedRoute,private patientservice:PatientService,private router:Router) {
    console.log(this.activateRouter.snapshot.params["id"])
    this.id=this.activateRouter.snapshot.params["id"]  }

  ngOnInit() {
    this.patientservice.findByid(this.id).subscribe(res=>{
      this.patient=res
    })
  }
  updatePatient(){
    this.patientservice.updatePatient(this.patient,this.id).subscribe(res=>{
   console.log(res)
  
    })
    this.router.navigate(["home/patient"])
  
  }

}
