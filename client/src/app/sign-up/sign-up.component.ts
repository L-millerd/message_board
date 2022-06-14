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
  password: string='';
  email: string='';
  addedUser: boolean = false;
  localUser:[] = [];

  constructor(private us: UserServiceService) { }

  addUser(){
    this.us.addUser(this.profilepic, this.username, this.twitterhandle, this.password, this.email).subscribe( newUser =>{
      console.log(newUser.data[0][0]);
      console.log(newUser);
      this.addedUser = newUser.addUser;

      //doesn't really work
      localStorage.setItem('userInfo', JSON.stringify(newUser.data[0][0]));

      localStorage.setItem('userID', JSON.stringify(newUser.data[0][0].id));
      localStorage.setItem('profilepic', JSON.stringify(newUser.data[0][0].profilepic));
      localStorage.setItem('username', JSON.stringify(newUser.data[0][0].username))
      localStorage.setItem('twitterhandle', JSON.stringify(newUser.data[0][0].twitterhandle));
    })
  }

  ngOnInit(): void {
  }


}
