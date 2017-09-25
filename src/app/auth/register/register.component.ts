import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register;
  constructor() { }

  onSubmit(register) {
    console.log(register.value);
  }

  ngOnInit() {
    this.register = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      dob: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      phoneNumberOne: new FormControl(''),
      phoneNumberTwo: new FormControl(''),
      address: new FormControl(''),
      aboutMe: new FormControl('')
    });
  }

}
