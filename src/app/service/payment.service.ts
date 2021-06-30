import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  getallPayment(){
    return this.http.get("http://localhost:3000/Payment")
  }
  removePayment(id){
    return this.http.delete("http://localhost:3000/Payment/"+id)
  }
  findByid(id){
    return this.http.get("http://localhost:3000/Payment/"+id)
  }
  updatePayment(data,id){
    return this.http.put("http://localhost:3000/Payment/"+id,data)
  }
  addPayment(data){
    return this.http.post("http://localhost:3000/Payment/",data)
  }
}


