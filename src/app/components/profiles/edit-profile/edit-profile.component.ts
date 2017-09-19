import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  title: any;

  initialData;
  editProfile;
  constructor(
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
      this.title = route.snapshot.data['title'];
    }

  ngOnInit() {
    this.initialData = this._userService.getProfile();
    this.editProfile = new FormGroup({
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
