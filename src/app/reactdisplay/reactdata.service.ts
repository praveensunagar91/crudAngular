import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReactdataService {

  url:string="https://restapidemonode.herokuapp.com/users";

  constructor( private http:HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }
  getUserByEmail(user_email){
    return this.http.get(this.url+user_email);
  }
  addData(newuser){
    let head=new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(newuser);
    return this.http.post(this.url,body,{headers:head});
  }

  deleteData(user_email){
    let head = new HttpHeaders().set("Content-Type","application/json");
    return this.http.delete(this.url+user_email,{headers:head});

  }

  changeData(newuser){
    let head=new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(newuser);
    return this.http.put(this.url+newuser.user_email,body,{headers:head});
  }

}
