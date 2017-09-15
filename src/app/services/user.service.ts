import { Injectable } from '@angular/core';
import { UserInterface } from './user.interface';


@Injectable()
export class UserService {
  public user: UserInterface = {
    id: 1,
    firstName: 'surendar',
    lastName: 'k',
    middleName: '',
    phoneNumberOne: 9666666666,
    phoneNumberTwo: 9733333333,
    dob: '30/01/1993',
    age: 20,
    email: 'dreamchaser@gmail.com',
    address: 'No123 , Main street, City, State, Country.',
    aboutMe: 'Haha',
    avatar: 'https://semantic-ui.com/images/avatar/large/elliot.jpg'
  };

  constructor() {}

  getProfile() {
    return this.user;
  }

}
