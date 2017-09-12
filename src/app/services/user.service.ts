import { Injectable } from '@angular/core';
import { UserInterface } from "./user.interface";


@Injectable()
export class UserService {
  public user:UserInterface={
    id:1,
    first_name:"surendar",
    last_name:"k",
    middle_name:"",
    phone_number_one:9666666666,
    phone_number_two:9733333333,
    dob:"30/01/2014",
    age:20,
    email:"dreamchaser@gmail.com",
    address:"No123 , Main street, City, State, Country.",
    about_me:"Haha",
    avatar:"https://semantic-ui.com/images/avatar/large/elliot.jpg"
  };

  constructor() {}

  getProfile(){
    return this.user;
  }



}
