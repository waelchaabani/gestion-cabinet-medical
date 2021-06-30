import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-editpayment',
  templateUrl: './editpayment.component.html',
  styleUrls: ['./editpayment.component.css']
})
export class EditpaymentComponent implements OnInit {

  id;
  payment;
    constructor(private activateRouter:ActivatedRoute,private paymentservice:PaymentService,private router:Router) { 
      console.log(this.activateRouter.snapshot.params["id"])
      this.id=this.activateRouter.snapshot.params["id"]  }
  
    
  
    ngOnInit() {
      this.paymentservice.findByid(this.id).subscribe(res=>{
      this.payment=res
    })
    }
  
    updatePayment(){
      this.paymentservice.updatePayment(this.payment,this.id).subscribe(res=>{
     console.log(res)
    
      })
      this.router.navigate(["home/payment"])
    
    }
  

}
