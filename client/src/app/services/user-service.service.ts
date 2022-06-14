import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  addURL = "http://localhost:4400/add-user";
  loginURL = "http://localhost:4400/login";

  constructor(private http: HttpClient) { }

  addUser(profilepic:string, twitterhandle: string, username:string, password:string, email:string){
   let addedUser = {
      "profilepic": profilepic,
      "twitterhandle": twitterhandle,
      "username": username,
      "password": password,
      "email": email
    }
    return this.http.post<any>(this.addURL, addedUser);
  }

  login(email:string, password: string){
    let loginUser = {
      "email": email,
      "password": password
    }
    return this.http.post<any>(this.loginURL, loginUser);
  }


}
