import { UserProfileService } from './../../core/user-profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  title: any;
  initialData;
  editProfile;
  constructor( private _userService: UserProfileService) {}

  // form submited...
  onSubmit(form) {
    return console.log(form.value);
  }

  ngOnInit() {
    // initialize the user..
    this.initialData = this._userService.getUserProfile();
    // initializing form data ..
    this.editProfile = new FormGroup({
      id: new FormControl(this.initialData.firstName),
      firstName: new FormControl(this.initialData.firstName),
      middleName: new FormControl(this.initialData.middleName),
      lastName: new FormControl(this.initialData.lastName),
      dob: new FormControl(this.initialData.dob),
      age: new FormControl(this.initialData.age),
      email: new FormControl(this.initialData.email),
      phoneNumberOne: new FormControl(this.initialData.phoneNumberOne),
      phoneNumberTwo: new FormControl(this.initialData.phoneNumberTwo),
      address: new FormControl(this.initialData.address),
      aboutMe: new FormControl(this.initialData.aboutMe)
    });
  }

}
