import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string='';
  password: string='';

  constructor(private us: UserServiceService) { }

  login(){
    this.us.login(this.email, this.password).subscribe( loginUser =>{
      console.log(loginUser.data[0][0]);

      localStorage.setItem('userID', JSON.stringify(loginUser.data[0][0].id));
      localStorage.setItem('profilepic', JSON.stringify(loginUser.data[0][0].profilepic));
      localStorage.setItem('username', JSON.stringify(loginUser.data[0][0].username))
      localStorage.setItem('twitterhandle', JSON.stringify(loginUser.data[0][0].twitterhandle));
    })
  }

  ngOnInit(): void {
  }

}
