import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/service/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.css']
})
export class AddpaymentComponent implements OnInit {
payment=
{
	"accountname":"",
	"description":"",
	"type":"",
	"datepayment":"",
  "amount":"",
  "medecin":""
}
  constructor(private paymentservice:PaymentService,private router:Router) {
  
  }

 ngOnInit() {
 }
 addPayment(){
 console.log(this.payment)
 
   this.paymentservice.addPayment(this.payment).subscribe(res=>{
 console.log(res)
 this.router.navigate(["home/payment"])
   })
 }


}
