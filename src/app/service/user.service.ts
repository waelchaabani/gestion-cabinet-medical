import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
    

  }
  login(email,password){
return this.http.post("http://localhost:3000/users/login",{email:email,password:password})
  }
register(name,age,email,password,phone,medecin){
  return this.http.post("http://localhost:3000/users/register",{name:name,age:age,email:email,password:password,phone:phone,medecin:medecin})

}
getUserDataById(id){
  return this.http.get("http://localhost:3000/user/"+id)
}
}
