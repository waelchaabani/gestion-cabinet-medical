import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http: HttpClient) { }
  loginm(email, password) {
    return this.http.post("http://localhost:3000/Medecin/loginm", { email: email, password: password })
  }
  registerm(data) {
    return this.http.post("http://localhost:3000/Medecin",data)
  }
  getallMedecin() {
    return this.http.get("http://localhost:3000/Medecin")
  }
  removeMedecin(id) {
    return this.http.delete("http://localhost:3000/Medecin/" + id)
  }
  findByid(id) {
    return this.http.get("http://localhost:3000/Medecin/" + id)
  }
  updateMedecin(data, id) {
    return this.http.put("http://localhost:3000/Medecin/" + id, data)
  }
  addMedecin(data) {
    return this.http.post("http://localhost:3000/Medecin/", data)
  }
  addPatient(data) {
    return this.http.post("http://localhost:3000/Medecin/addp", data)
  }
  addRDV(data) {
    return this.http.post("http://localhost:3000/Medecin/addRDV", data)
  }
  addPayment(data) {
    return this.http.post("http://localhost:3000/Medecin/addPayment", data)
  }
  getPatientDataById(id){
    return this.http.post("http://localhost:3000/Medecin/",+id)

  }
}
