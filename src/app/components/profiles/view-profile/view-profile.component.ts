import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  data;
  constructor(
    private _userService:UserService
  ) { }

  ngOnInit() {
    this.data = this._userService.getProfile();
  }

}
