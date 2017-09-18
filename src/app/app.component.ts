import { Component  , OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Here You Are';
  screenHeight = window.innerHeight;


  getScreenHeight() {
    return this.screenHeight;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDkZT7eeaxc44ID9kPFWSiAyZpcSz9s0cM',
      authDomain: 'contact-13fe7.firebaseapp.com',
      databaseURL: 'https://contact-13fe7.firebaseio.com',
      projectId: 'contact-13fe7',
      storageBucket: 'contact-13fe7.appspot.com',
      messagingSenderId: '273312495149'
    });
  }
}
