import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {

  url:string="https://restapidemonode.herokuapp.com/tasks/";

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }
  getDtatById(Id){
    return this.http.get(this.url+Id);

  }

  insertData(newuser){
    let head= new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(newuser);
    return this.http.post(this.url,body,{headers:head});
  }

  removeData(Id){
    let head=new HttpHeaders().set("Content-Type","application/json");
    return this.http.delete(this.url+Id,{headers:head});

  }

  onChange(newuser){
    let head= new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(newuser);
    return this.http.put(this.url+newuser.Id,body,{headers:head});
  }
}
