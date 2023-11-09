export interface UserDetails {
    user_id: string;
    email:string;
    first_name: string;
    last_name: string;
    password: string;
  }


  export interface User {
    user_id: string;
    email:string;
    first_name: string;
    last_name: string;
    password: string;
    welcomed: boolean,
    role: string
  }