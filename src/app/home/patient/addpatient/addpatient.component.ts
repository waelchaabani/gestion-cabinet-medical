import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { Router } from '@angular/router';
import { MedecinService } from 'src/app/service/medecin.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {

  patient = {
    "firstname": "",
    "Lastname": "",
    "email": "",
    "DateofBirth": "",
    "sexegender": "",
    "age": "",
    "address": "",
    "phone": "",
    "medecin": "",
  }
  medecin;
  user;
  medecin2;
  idmed;
  image;
  constructor(private patientservice: PatientService, private medecinservice: MedecinService, private router: Router) { }

  ngOnInit() {
    this.getallMedecin()

    this.user = JSON.parse(localStorage.getItem("user"))

    console.log("curent user ", this.user)
  }
  addPatient() {
    console.log("file : ", this.image)
    const formData = new FormData();
    formData.append('firstname', this.patient.firstname);
    formData.append('Lastname', this.patient.Lastname);
    formData.append('email', "gghg");
    formData.append('password', "fdfff");

    formData.append('DateofBirth', this.patient.DateofBirth);
    formData.append('sexegender', this.patient.sexegender);
    formData.append('age', this.patient.age);
    formData.append('address', this.patient.address);
    formData.append('phone', this.patient.phone);
    formData.append('avatar', this.image);

    this.patientservice.addPatient(formData).subscribe(res => {
      console.log("add patient ", res['patient']._id)
      console.log("add to medecin ", this.patient.medecin)



      this.medecinservice.addPatient({ medecin: this.patient.medecin, patient: res['patient']._id }).subscribe(res => {
        console.log("add to medecin ", res)
      })

    this.router.navigate(["home/patient"])
    })
  }

  getallMedecin() {
    this.medecinservice.getallMedecin().subscribe(res => {
      console.log(res)
      this.medecin = res;
      this.medecin2 = this.medecin;
    })
  }
  upload(e) {
    //this.patient.image=(e.target.value);
    //console.log(this.patient.image);
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      this.image = file;
    }
  }
}