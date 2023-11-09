import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { APIService } from '../services/api.service';
import { User } from 'src/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm!: FormGroup

  constructor(private authService: AuthService, private fb:FormBuilder, private apiService: APIService){
 

    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  createUser(){
    console.log(this.registrationForm.value);

    let details: User = this.registrationForm.value
    
    this.apiService.createUser(details)
  }
}