import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { RoleService } from '../service/role.service';
import { MedecinService } from '../service/medecin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user={
   "name":"",
   "age":"",
   "email":"",
   "password":"",
   "phone":"",
   "medecin":""
   

 }
 role;
  medecin;
  roles: any = []
  image;

  constructor(private router: Router, private userservice: UserService, private roleservice: RoleService,private medecinservice:MedecinService) { }

  ngOnInit() {
    this.getallRole()
    this.getallMedecin()
  } 

  register() {
    console.log(this.user.name, this.user.age, this.user.email, this.user.password, this.user.phone,this.user.medecin)
    this.userservice.register(this.user.name, this.user.age, this.user.email, this.user.password, this.user.phone,this.user.medecin ).subscribe(res => {
      console.log(res)
      this.router.navigate(["login"])
    })

  }
  getallRole() {
    this.roleservice.getallRole().subscribe(res => {
      console.log("welcome", res)
      this.roles = res
    })
  }
  getallMedecin() {
    this.medecinservice.getallMedecin().subscribe(res => {
      console.log(res)
      this.medecin = res;
     
    })
  }
 
}
