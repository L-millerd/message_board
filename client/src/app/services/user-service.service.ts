import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  addURL = "http://localhost:4400/add-user"

  constructor(private http: HttpClient) { }

  addUser(profilepic:string, twitterhandle: string, username:string ){
   let addedUser = {
      "profilepic": profilepic,
      "twitterhandle": twitterhandle,
      "username": username
    }
    return this.http.put<any>(this.addURL, addedUser);
  }



}
