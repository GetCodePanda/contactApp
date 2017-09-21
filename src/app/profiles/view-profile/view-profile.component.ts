import { UserProfileService } from './../../core/user-profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {



  data;

  constructor(
    private _userService: UserProfileService
  ) {  }

  ngOnInit() {
    // initializing the data ..
    this.data = this._userService.getUserProfile();
  }

}
