import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../service/medecin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginmedecin',
  templateUrl: './loginmedecin.component.html',
  styleUrls: ['./loginmedecin.component.css']
})
export class LoginmedecinComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private medecinservice: MedecinService) { }

  ngOnInit() {
  }
  medecin: any[]

  loginm() {

    this.medecinservice.loginm(this.email, this.password).subscribe(res => {
      console.log(res["data"]);
      this.medecin = res["data"]["medecin"];
      localStorage.setItem('medecin', JSON.stringify(this.medecin));
      localStorage.setItem('role', "doctor");
      localStorage.setItem("user", JSON.stringify(this.medecin))

      this.router.navigate(["home"])

    })




  }


}
