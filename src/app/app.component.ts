import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title="Here You Are"
  screenHeight:number = window.innerHeight;

  getScreenHeight(){
    return this.screenHeight;
  }
}
