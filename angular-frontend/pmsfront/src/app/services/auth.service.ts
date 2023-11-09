import { Injectable } from '@angular/core';
import { userLogin } from 'src/interfaces/login';
import { UserDetails } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async login(userLogins: userLogin){
    let response = await fetch('http://localhost:4400/user/login', {
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(userLogins)
    })

    const data = await response.json()
    let token = data.token
    localStorage.setItem('token', token)

    console.log(token);
    

    return data
  }

  async registerUser (userdetails: UserDetails){
    let response = await fetch('http://localhost:4400/user/register', {
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(userdetails)
    })

    const data = await response.json()

    console.log(data); 

    return data
  }
}