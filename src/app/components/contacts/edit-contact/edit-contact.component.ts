/******
  Angular Lib
******/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
/******
  Sample data...
******/
import { data } from './../../../api/index';
// Contact interface...
import { Contact } from './../interface/index';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  // props..
  id;
  contacts: Array<Contact> = data;
  currentContact: Contact;
  fileName: string;

  // initial form data
  editForm: FormGroup;
  firstName;
  middleName;
  lastName;
  email;
  dob;
  age;
  phoneNumberOne;
  phoneNumberTwo;
  permanentAddress;
  alternateAddress;
  avatar;
  // class constructor
  constructor(
    private route: ActivatedRoute,
  ) {
    this.id = route.snapshot.paramMap.get('id');
  }

  setCurrentContact(contacts , id) {
    return contacts.map((contact) => {
      const contactId  = Number(id);
      // console.log(typeof(contactId) , typeof(contact.id))
      // console.log(contact.id);
      if (contact.id === contactId ) {
        // console.log(contact.id)
        return this.currentContact = contact;
      }
    });
  }

  setImagePreview(event) {
    this.fileName = event.name;
    this.avatar = event.dataURL;
    this.editForm.controls.avatar.setValue(event.dataURL);
    return;
  }

  onSubmit(editForm) {
    console.log(editForm.value);
  }

  onDateChange(event) {
    // tslint:disable-next-line:prefer-const
    let dob =  new Date(event.targetElement.value),
        // tslint:disable-next-line:prefer-const
        cd = new Date(),
        // tslint:disable-next-line:prefer-const
        diff = cd.getFullYear() - dob.getFullYear();

          if ( cd.getDate() >= dob.getDate() && cd.getDay >= dob.getDay ) {
            return this.editForm.controls.age.setValue(diff);
          }else if ( cd.getDate() < dob.getDate() && cd.getDay() < dob.getDay() ) {
            return this.editForm.controls.age.setValue(diff - 1);
          }

  }

  ngOnInit() {
    // finding an id of the current form.

    // console.log(this.id);
    // finding the current selected contact..
    this.setCurrentContact(this.contacts, this.id);
    // console.log(this.id , this.currentContact);
    // edit form initialization ..

    this.firstName = this.currentContact.firstName;
    this.middleName = this.currentContact.middleName;
    this.lastName = this.currentContact.lastName;
    this.email = this.currentContact.email;
    this.dob = this.currentContact.dob;
    this.age = this.currentContact.age;
    this.phoneNumberOne = this.currentContact.phoneNumberOne;
    this.phoneNumberTwo = this.currentContact.phoneNumberTwo;
    this.permanentAddress = this.currentContact.permanentAddress;
    this.alternateAddress = this.currentContact.alternateAddress;
    this.avatar = this.currentContact.avatar;

    this.editForm = new FormGroup({
      firstName: new FormControl(this.firstName),
      middleName: new FormControl(this.middleName),
      lastName: new FormControl(this.lastName),
      email: new FormControl(this.email),
      dob: new FormControl(null),
      age: new FormControl(this.age),
      phoneNumberOne: new FormControl(this.phoneNumberOne),
      phoneNumberTwo: new FormControl(this.phoneNumberTwo),
      permanentAddress: new FormControl(this.permanentAddress),
      alternateAddress: new FormControl(this.alternateAddress),
      avatar: new FormControl(this.avatar),
    });
  }

}
