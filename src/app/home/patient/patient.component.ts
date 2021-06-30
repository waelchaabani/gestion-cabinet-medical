import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients2;
  patients;
  id;

  user;

  constructor(private Patientservice: PatientService) { }

  ngOnInit() {

    this.getallPatient()

     this.user=JSON.parse(localStorage.getItem("medecin"))

     console.log("patient of user",this.user.patients)

  }


  selectUser(id) {

    console.log("idd", id)

    this.id = id;
  }
  getallPatient() {
    this.Patientservice.getallpatient().subscribe(res => {
      console.log(res)
      this.patients = res;
      this.patients2 = this.patients;
    })
  }
  removepatient() {
    this.Patientservice.removepatient(this.id).subscribe(res => {
      console.log(res)
      this.getallPatient()

    })
  }
  Search(e) {
    this.patients2 = this.patients.filter(item => item['firstname'].indexOf(e.target.value) > -1);
  }

}
