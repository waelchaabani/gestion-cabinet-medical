import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedecinService } from '../service/medecin.service';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-registermedecin',
  templateUrl: './registermedecin.component.html',
  styleUrls: ['./registermedecin.component.css']
})
export class RegistermedecinComponent implements OnInit {
  medecin = {
    "firstname": "",
    "Lastname": "",
    "email": "",
    "password": "",
    "speciality": "",
    "phone": "",
    "address": "",
  }
  role;
  roles: any = []
  image;
  constructor(private router: Router, private medecinservice: MedecinService, private roleservice: RoleService) { }

  ngOnInit() {
    this.getallRole()
  }

  registerm() {
    console.log("file : ", this.image)
    const formData = new FormData();
    formData.append('firstname', this.medecin.firstname);
    formData.append('Lastname', this.medecin.Lastname);
    formData.append('email', this.medecin.email);
    formData.append('password', this.medecin.password);

    formData.append('speciality', this.medecin.speciality);
    formData.append('phone', this.medecin.phone);
    formData.append('address', this.medecin.address);
    formData.append('avatar', this.image);
    this.medecinservice.registerm(formData).subscribe(res => {
      console.log(res)
      this.router.navigate(["loginmedecin"])
    })

  }
  getallRole() {
    this.roleservice.getallRole().subscribe(res => {
      console.log("welcome", res)
      this.roles = res
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

