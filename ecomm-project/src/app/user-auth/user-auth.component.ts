import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { signUp, Login } from 'data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  constructor(private user:UserService){}
  ngOnInit():void{
    this.user.reloadSeller();
  }

  showLogin = false;
  SignUp(data: signUp) {
    this.user.SignUp(data);
  }

  Login(data: Login) {
    this.user.Login(data);
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }

}
