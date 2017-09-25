import { Component  , OnInit} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

// rxjs imports ...
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title$: Observable<string>;
  screenHeight = window.innerHeight;

constructor (
  private _route: ActivatedRoute,
  private _router: Router
) {}

  getScreenHeight() {
    return this.screenHeight;
  }

  ngOnInit() {
    this.title$ = this._router.events
    .filter(e => e instanceof NavigationEnd)
    .map(() => {
      let route = this._route;
      while (route.firstChild) {
        route = route.firstChild;
      }

      return route;
    })
    .filter((route) => route.outlet === 'primary')
    .mergeMap((route) => route.data)
    .map(data => data['title']);
  }
}
