import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Angular Material imports ...
import { DateAdapter, NativeDateAdapter } from '@angular/material';
// Contact Service ...
import { ContactService } from '../shared/contact.service';

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
  permanentAddress = '';
  alternateAddress = '';
  avatar = '';

  isDisabled = true;

  defaultDate = new Date(1993 , 1 , 30 );
  // image  preview :
  fileName;
  previewImage = 'https://semantic-ui.com//images/wireframe/square-image.png';

  // class constructor..
  constructor(
    dateAdapter: DateAdapter<NativeDateAdapter>,
    private _contactsService: ContactService
  ) {
      dateAdapter.setLocale('de-DE');
    }
  // setting preview of user image.
  setImagePreview(event) {
    this.fileName = event.name;
    this.previewImage = event.dataURL;
    this.myForm.controls.avatar.setValue(event.dataURL);
    return;
  }
  //
  onSubmit(form) {
    const RandomId = Math.floor(Math.random() * 101);
    console.log(form.value , form.value.id = RandomId  );
    this._contactsService.createNewContact(form.value);
  }

  onDateChange(event) {
    // tslint:disable-next-line:prefer-const
    let dob =  new Date(event.targetElement.value),
        // tslint:disable-next-line:prefer-const
        cd = new Date(),
        // tslint:disable-next-line:prefer-const
        diff = cd.getFullYear() - dob.getFullYear();

          if ( cd.getDate() >= dob.getDate() && cd.getDay >= dob.getDay ) {
            return this.myForm.controls.age.setValue(diff);
          }else if ( cd.getDate() < dob.getDate() && cd.getDay() < dob.getDay() ) {
            return this.myForm.controls.age.setValue(diff - 1);
          }

  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(this.firstName , Validators.required),
      middleName: new FormControl(this.middleName , Validators.required),
      lastName: new FormControl(this.lastName , Validators.required),
      email: new FormControl(this.email , Validators.required),
      dob: new FormControl(null , Validators.required),
      age: new FormControl(this.age , Validators.required),
      phoneNumberOne: new FormControl(this.phoneNumberOne , Validators.required),
      phoneNumberTwo: new FormControl(this.phoneNumberTwo , Validators.required),
      permanentAddress: new FormControl(this.permanentAddress , Validators.required),
      alternateAddress: new FormControl(this.alternateAddress , Validators.required),
      avatar: new FormControl(this.avatar , Validators.required),
    });
  }

}
