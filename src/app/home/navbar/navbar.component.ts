import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
medecin :any;
constructor(private route :Router) {
  this.medecin=JSON.parse(localStorage.getItem('medecin'));
  console.log(this.medecin['_id'])
 }

  ngOnInit() {[]
  }
  goToProfil(id:string):void{
    this.route.navigate(['home/profile/'+this.medecin['_id']]);

}
logout(){
  localStorage.removeItem('user');
  this.route.navigate(['/login'])

}

}
