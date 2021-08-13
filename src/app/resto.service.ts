import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {


  constructor(private http:HttpClient) { }

  url ="http://localhost:3000/Restaurant";
  rooturl = "http://localhost:3000/";
  
  getList(){
    return this.http.get(this.url);
  }
  
  insert(data:any){
    return this.http.post(this.url,data);
  }

  delete(id:Number){
    return this.http.delete(`${this.url}/${id}`) 
  }

  getid(id:Number){
    return this.http.get(`${this.url}/${id}`) 
  }

  update(id:Number,data:any){
    return this.http.put(`${this.url}/${id}`,data) 
  }

  insertUser(data:any){
    return this.http.post(this.rooturl+'user',data);
  }
}
