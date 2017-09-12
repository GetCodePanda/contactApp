import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  initialData;
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.initialData = this._userService.getProfile();
  }

}
