import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  id;
  payment;
  payment2;
  user;
  
    constructor(private paymentservice:PaymentService,) { }
  
    ngOnInit() {
      this.getallPayment()  
    
      this.user=JSON.parse(localStorage.getItem("medecin"))


      console.log("ookkkkkkkkkkkk ",this.user.payment)
    
    }
  
  
    selectUser(id){
  
      console.log("idd",id)
  
      this.id=id;
    }
  getallPayment(){
    this.paymentservice.getallPayment().subscribe(res=>{
      console.log(res)
      this.payment=res;
      this.payment2=this.payment;
    })
  }
  removePayment(){
    this.paymentservice.removePayment(this.id).subscribe(res=>{
      console.log(res)
      this.getallPayment()
  
  })
  }

  Search(e){
    this.payment2=this.payment.filter(item=>item['accountname'].indexOf(e.target.value)>-1);
  }
}
