import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData: { email: string; password: string } = { email: '', password: '' };
  emailError: string = '';
  passwordError: string = '';
  apiMessage: string = '';

  constructor(private router: Router, private userService: UsersService) {}

  onSubmit() {
    this.emailError = '';
    this.passwordError = '';
    this.apiMessage = '';

    if (this.userData.email.trim() === '') {
      this.emailError = 'Email is required';
      return;
    }

    if (this.userData.password.trim() === '') {
      this.passwordError = 'Password is required';
      return;
    }

    const userData = {
      email: this.userData.email,
      password: this.userData.password,
    };

    

    this.userService['loginUser'](userData).then(
      (data: { message: string; error: string; token: string; }) => {
        if ('message' in data) {
          this.apiMessage = data.message;
        }
        if ('error' in data) {
          this.apiMessage = data.error;
        }

        if ('token' in data) {
          localStorage.setItem('token', data.token);
        }
        this.userService.checkDetails().then((data) => {
          if ('info' in data) {
            if (data.info.isAdmin === true) {
              localStorage.setItem('user_email', data.info.email!);
              this.router.navigate(['/admin']);
            } else if (data.info.isAdmin === false) {
              localStorage.setItem('user_email', data.info.email!);
              this.router.navigate(['/user']);
            }
          }
        });
      },
      (error: { error: string; }) => {
        console.error(error);
        this.apiMessage = error.error;
      }
    );
  }
}