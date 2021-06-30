import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  
    constructor(private router:Router , private userservice:UserService) { }
  
    ngOnInit() {
    }
    user:any[]
  login(){
  
  
  
    this.userservice.login(this.email,this.password).subscribe(res=>{
      console.log(res["data"]["user"].medecin);
      localStorage.setItem('medecin',JSON.stringify(res["data"]["user"].medecin));

      this.user = res["data"]["user"];
      localStorage.setItem('user',JSON.stringify(this.user));
      localStorage.setItem('role', "secretaire");
      localStorage.setItem("user", JSON.stringify(this.user))
      



     this.router.navigate(["home"])

    })
  
    
  
  
  }

}
