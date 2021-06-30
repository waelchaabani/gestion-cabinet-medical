import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/service/medecin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmedecin',
  templateUrl: './addmedecin.component.html',
  styleUrls: ['./addmedecin.component.css']
})
export class AddmedecinComponent implements OnInit {

  medecin={
    "firstname":"",
  "Lastname":"",
  "email":"",
  "speciality":"",
  "address":"",
  "phone":""
  }
    constructor(private medecinservice:MedecinService,private router:Router) { 
  
    }
  
    ngOnInit() {
      
    }
    addMedecin(){
      console.log(this.medecin)
      
        this.medecinservice.addMedecin(this.medecin).subscribe(res=>{
      console.log(res)
      this.router.navigate(["home/medecin"])
        })
      }
  }
