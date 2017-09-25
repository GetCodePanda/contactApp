import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      firstName: new FormControl('' , Validators.required),
      middleName: new FormControl('' , Validators.required),
      lastName: new FormControl('' , Validators.required),
      dob: new FormControl('' , Validators.required),
      age: new FormControl('' , Validators.required),
      email: new FormControl('' , Validators.required),
      phoneNumberOne: new FormControl('' , Validators.required),
      phoneNumberTwo: new FormControl('' , Validators.required),
      address: new FormControl('' , Validators.required),
      aboutMe: new FormControl('' , Validators.required)
    });

    console.log(this.register);
  }

}
