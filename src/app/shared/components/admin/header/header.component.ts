import { Component, OnInit, Input } from '@angular/core';
import { UserProfileService } from '../../../../core/user-profile.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _userProfileService: UserProfileService ) { }

  @Input() appTitle: string;

  user;
// angular life cycle..
  ngOnInit() {
    this.user = this._userProfileService.getUserProfile();
  }

}
