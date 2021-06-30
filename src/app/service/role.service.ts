import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }
  getallRole(){
    return this.http.get("http://localhost:3000/Role")
  }
 
 
  addRole(data){
    return this.http.post("http://localhost:3000/Role/",data)
  }
}


