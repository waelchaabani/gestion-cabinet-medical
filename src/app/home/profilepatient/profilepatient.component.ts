import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';
import { AppointmentService } from 'src/app/service/appointment.service';
import { MedecinService } from 'src/app/service/medecin.service';



@Component({
  selector: 'app-profilepatient',
  templateUrl: './profilepatient.component.html',
  styleUrls: ['./profilepatient.component.css']
})
export class ProfilepatientComponent implements OnInit {
  rdv = {
    "name": "",
    "email": "",
   "nameofdoctor":"",
    "numRDV": "",
    "DateRDV": "",
    "HeureRDV": "",
    "phone": "",
    "injury": "",
    "medecin": ""
  }
  patients;
  medecin;
  id;
  private routeSub: Subscription;
  profilData1;
  profilData2;

  constructor(private route: ActivatedRoute, private patientservice: PatientService, private appointmentservice: AppointmentService, private medecinservice: MedecinService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.selectUser(this.id);
      this.getallRDV(this.id);

    })

   



  }


  selectUser(id) {
    this.patientservice.findByid(this.id).subscribe(res => {
      this.profilData1 = res;
      console.log(this.profilData1)
    })



    /*getallPatient(){
      this.Patientservice.getallpatient().subscribe(res=>{
        console.log(res)
        this.patients=res
      })
    }*/

  }
  getallRDV(id) {
    this.appointmentservice.findByid(this.id).subscribe(res => {
      this.profilData2 = res;
      console.log(this.profilData2)
    })
  }

}

