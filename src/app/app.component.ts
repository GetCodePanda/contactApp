import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component  , OnInit} from '@angular/core';



import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title;
  screenHeight = window.innerHeight;

constructor (
  private _route: ActivatedRoute,
  private _router: Router
) {}

  getScreenHeight() {
    return this.screenHeight;
  }

  ngOnInit() {

    this._router.events
      .map(() => this._route)
      .map((route) => {
        while (route.firstChild) {return route = route.firstChild; }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        this.title = event.title;
        console.log('NavigationEnd:', event);
      });
  }
}
