
 
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:3000/";
 
  constructor(private http: HttpClient) {
  }
 
 
 
 addemployee(person:any){
   return this.http.post( "http://localhost:3000/people",person)
 }

 getemployee(){
  return this.http.get(`http://localhost:3000/people`)
 }
 getperson(id:any){
  return this.http.get('http://localhost:3000/people/'+id)
  
}
delemployee(id:any){
  return this.http.delete('http://localhost:3000/people/' + id);
}

editemployee(id:any,value:any){
  return this.http.put('http://localhost:3000/people/' + id,value);
}
 
 
}
