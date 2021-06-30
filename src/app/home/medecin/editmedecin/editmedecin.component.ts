import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from 'src/app/service/medecin.service';

@Component({
  selector: 'app-editmedecin',
  templateUrl: './editmedecin.component.html',
  styleUrls: ['./editmedecin.component.css']
})
export class EditmedecinComponent implements OnInit {

  id;
medecin;
  constructor(private activateRouter:ActivatedRoute,private medecinservice:MedecinService,private router:Router) {
    console.log(this.activateRouter.snapshot.params["id"])
    this.id=this.activateRouter.snapshot.params["id"]
   }

  ngOnInit() {
    this.medecinservice.findByid(this.id).subscribe(res=>{
      this.medecin=res
    })
  }
  updateMedecin(){
    this.medecinservice.updateMedecin(this.medecin,this.id).subscribe(res=>{
   console.log(res)
  
    })
    this.router.navigate(["home/medecin"])
  
  }

}
