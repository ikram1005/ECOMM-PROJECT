import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signUp, Login } from 'data-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private route: Router) { }

  SignUp(data: signUp) {
    this.http.post('http://localhost:3000/users', data, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          this.isLoggedIn.next(true);
          localStorage.setItem('user', JSON.stringify(result.body))
          this.route.navigate(['home']);
        }
      })
  }
  reloadSeller() {
    if (localStorage.getItem('user')) {
      this.isLoggedIn.next(true);
      this.route.navigate(['home']);
    }
  }

  Login(data: Login) {
    this.http.get(`http://localhost:3000/users/?email=${data.email}&password=${data.password}`, { observe: 'response' })
      .subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          this.isLoggedIn.next(true);
          localStorage.setItem('user', JSON.stringify(result.body[0]))
          this.route.navigate(['home']);
        } else {
          alert('Login failed !.')
        }
      })
  }
}
