import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  profilepic: string ='';
  username: string = '';
  twitterhandle: string='';
  addedUser: boolean = false;
  localUser:[] = [];

  constructor(private us: UserServiceService) { }

  addUser(){
    this.us.addUser(this.profilepic, this.username, this.twitterhandle).subscribe( newUser =>{
      // console.log(newUser.data[0]);
      // console.log(newUser);
      this.addedUser = newUser.addUser;

    })
  }

  ngOnInit(): void {
  }

  store(localUser:any){
    var items:[] =[];
    for(var i=0; i < localUser.length; i++){
      localUser.push(localUser[i]);
    }
    localStorage.setItem("user", JSON.stringify(items));
    console.log(localStorage.getItem("user"));
  }

}
