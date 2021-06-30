import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
patients;
id;
  constructor(private Patientservice:PatientService) { }

  ngOnInit() {

    this.getallPatient()  
  
  
  }


  selectUser(id){

    console.log("idd",id)

    this.id=id;
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

}
