import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedecinService } from 'src/app/service/medecin.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {
medecin;
id;
  constructor(private router: Router,private Medecinservice:MedecinService) { }

  ngOnInit() {
    this.getallMedecin() 
  }
  selectUser(id){

    console.log("idd",id)

    this.id=id;
  }
getallMedecin(){
  this.Medecinservice.getallMedecin().subscribe(res=>{
    console.log(res)
    this.medecin=res
  })
}
removeMedecin(){
  this.Medecinservice.removeMedecin(this.id).subscribe(res=>{
    console.log(res)
    this.getallMedecin()

})

}
}
