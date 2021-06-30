import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) {
    
  }
  getallpatient(){
    return this.http.get("http://localhost:3000/Patient")
  }
  removepatient(id){
    return this.http.delete("http://localhost:3000/Patient/"+id)
  }
  findByid(id){
   
    return this.http.get("http://localhost:3000/Patient/"+id)
  }
  updatePatient(data,id){
    return this.http.put("http://localhost:3000/Patient/"+id,data)
  }
  addPatient(data){
    
    return this.http.post("http://localhost:3000/Patient",data)
  }
  addPatientToMedecin(data){
    return this.http.post("http://localhost:3000/Medecin/addp",data)
  }
 
    

 
 
}
