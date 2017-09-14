import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { data } from './../../../api/index';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  myForm: FormGroup;
  // form initial values :
  firstName = '';
  middleName = '';
  lastName = '';
  email = '';
  dob = null;
  age = '';
  phoneNumberOne = '';
  phoneNumberTwo = '';
  mainAddress = '';
  subAddress = '';
  contactImage = '';

  date;
  // image  preview :
  fileName;
  previewImage = 'https://semantic-ui.com//images/wireframe/square-image.png';

  // class constructor..
  constructor() { }
  //
  setImagePreview(event) {
    this.fileName = event.name;
    this.previewImage = event.dataURL;
    this.myForm.controls.contactImage.setValue(event.dataURL);
    return;
  }
  // log
  say() {
    console.log(this.date);
  }
  //
  onSubmit(form) {
    console.log(form.value);
    data.push(form.value);
  }

  onDateChange(event) {
    console.log(this.myForm.controls.age.setValue('15'));
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(this.firstName),
      middleName: new FormControl(this.middleName),
      lastName: new FormControl(this.lastName),
      email: new FormControl(this.email),
      dob: new FormControl(null),
      age: new FormControl(this.age),
      phoneNumberOne: new FormControl(this.phoneNumberOne),
      phoneNumberTwo: new FormControl(this.phoneNumberTwo),
      mainAddress: new FormControl(this.mainAddress),
      subAddress: new FormControl(this.subAddress),
      contactImage: new FormControl(this.contactImage),
    });
  }

}
