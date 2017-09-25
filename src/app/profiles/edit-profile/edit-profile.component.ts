import { UserProfileService } from './../../core/user-profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  // form submitted...
  onSubmit(form) {
    return console.log(form.value);
  }

  ngOnInit() {
    // initialize the user..
    this.initialData = this._userService.getUserProfile();
    // initializing form data ..
    this.editProfile = new FormGroup({
      id: new FormControl(this.initialData.firstName , Validators.required),
      firstName: new FormControl(this.initialData.firstName , Validators.required),
      middleName: new FormControl(this.initialData.middleName , Validators.required),
      lastName: new FormControl(this.initialData.lastName , Validators.required),
      dob: new FormControl(this.initialData.dob , Validators.required),
      age: new FormControl(this.initialData.age , Validators.required),
      email: new FormControl(this.initialData.email , Validators.required),
      phoneNumberOne: new FormControl(this.initialData.phoneNumberOne , Validators.required),
      phoneNumberTwo: new FormControl(this.initialData.phoneNumberTwo , Validators.required),
      address: new FormControl(this.initialData.address , Validators.required),
      aboutMe: new FormControl(this.initialData.aboutMe , Validators.required)
    });
  }

}
