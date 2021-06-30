import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
user :any;
role;

  medecin = {
    "firstname": "",
    "Lastname": "",
    "email": "",
    "password": "",
    "speciality": "",
    "phone": "",
    "address": "",
    "image":"",
  }

  constructor() { 
      this.user=JSON.parse(localStorage.getItem('user'))
      this.role=localStorage.getItem('role')

    console.log("role",this.role)
  }

  ngOnInit() {
  }

}
