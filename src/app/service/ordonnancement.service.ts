import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdonnancementService {

  constructor(private http:HttpClient) { }
  findByid(id){
    return this.http.get("http://localhost:3000/Ordonnancement/"+id)
  }
  addOrdonnancement(data){
    return this.http.post("http://localhost:3000/Ordonnancement/",data)
  }
}
