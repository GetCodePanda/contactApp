import { Component, OnInit } from '@angular/core';
import { data } from './../../api/index';
import { Contact } from './interface/index';



@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    // this property holds the current contact objects ..
    currentContact: Contact;
    // user requested number of items
    // set by the pagination select property...
    userRequestedNoOfItems: number ;
    // this is the result of the pagination filter
    // and its show in the table tr *ngFor directive..
    results: Array<any> = [];
    // sample data from the api index files ..
    contacts: Array<Contact> = data;

    constructor() { }

    // to handle the right click event to display the selected contact
    // and set to currentContact props..
    onRightClick(event, contact) {
        console.log(contact);
        // checking if the contact is already
        // selected or not..
        if (this.currentContact === contact) { return; }
        this.currentContact = contact;
    }

    // To handle the pagination select ...
    setPagination(noOfRequestedItems) {
        this.userRequestedNoOfItems = noOfRequestedItems;
        return this.contacts.map((cv, i) => {
            if (i < noOfRequestedItems ) {
                console.log(cv , i);
                return this.results.push(cv);
            }
        });
    }


    ngOnInit() {
    }

}
