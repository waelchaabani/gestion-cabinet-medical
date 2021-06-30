import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }
  getallRDV(){
    return this.http.get("http://localhost:3000/RDV")
  }
  removeRDV(id){
    return this.http.delete("http://localhost:3000/RDV/"+id)
  }
  findByid(id){
    return this.http.get("http://localhost:3000/RDV/"+id)
  }
  updateRDV(data,id){
    return this.http.put("http://localhost:3000/RDV/"+id,data)
  }
  addRDV(data){
    return this.http.post("http://localhost:3000/RDV/",data)
  }
}
