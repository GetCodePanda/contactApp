import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { data } from './../../api/index';
import { Contact } from './interface/index';

// var counter;


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    title: any;
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
    // pagination dropdown menu..
    // currently selected item value binded to this element..
    initialValue = 0;
    selectedValue = 2;

    intialCounterValue: number;

    options = [
        {value: 2, viewValue: 2},
        {value: 5, viewValue: 5},
        {value: 10, viewValue: 10},
        {value: this.contacts.length, viewValue: 'All'}
    ];

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.title = route.snapshot.data['title'];
    }

    // to handle the right click event to display the selected contact
    // and set to currentContact props..
    onRightClick(event, contact): void {
        console.log(contact);
        // checking if the contact is already
        // selected or not..
        if (this.currentContact === contact) { return; }
        this.currentContact = contact;
    }

    nextPage(event) {

    }

    prevPage(event) {

    }

    ngOnInit() {
    }

}
