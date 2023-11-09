export interface User {
  user_id: string;
  email:string;
  first_name: string;
  last_name: string;
  password: string;
}

export interface LoginUser extends Request{
  email: string,
  password: string
}