import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  title: any;

  data;
  constructor(
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { this.title = route.snapshot.data['title']; }

  ngOnInit() {
    this.data = this._userService.getProfile();
  }

}
