import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  patients;
  id;
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
  user :any;
  role;
  private routeSub :Subscription;
  profilData;
    constructor(private route:ActivatedRoute,private userservice:UserService) { 
      this.user=JSON.parse(localStorage.getItem('user'))
      this.medecin=JSON.parse(localStorage.getItem('medecin'))

    this.role=localStorage.getItem('role')
    }
  
    ngOnInit() {
  this.routeSub=this.route.params.subscribe(params=>{
    this.id=params['id'];
    this.selectUser(this.id);
   
  })
     
    
    
    }
  
  
    selectUser(id){
  this.userservice.getUserDataById(this.id).subscribe(res=>{
    this.profilData=res;
    console.log(this.profilData)
  })
     
    }
  /*getallPatient(){
    this.Patientservice.getallpatient().subscribe(res=>{
      console.log(res)
      this.patients=res
    })
  }*/

}
