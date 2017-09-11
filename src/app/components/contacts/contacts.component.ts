import { Component, OnInit } from '@angular/core';
import { data } from './../../api/index';
import { Contact } from './interface/index';



@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    // this property to toggle the extra menu 
    // while user right click the contact list items ..
    currentContact;
    // right click test
    contacts:Array<Contact>=data;

    constructor() { }

    onRightClick(event, contact) {
        console.log(contact);
        if(this.currentContact === contact) return;
        this.currentContact = contact;
    }


    ngOnInit() {
    }

}
