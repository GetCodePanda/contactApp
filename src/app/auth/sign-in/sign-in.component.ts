import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signIn;
  constructor() { }
  onSubmit(user) {
    console.log(user.value);
  }
  ngOnInit() {
    this.signIn = new FormGroup({
        userName: new FormControl(''),
        password: new FormControl('')
    });
  }

}
