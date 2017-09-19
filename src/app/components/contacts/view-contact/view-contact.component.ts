import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { data } from './../../../api/index';
import { Contact } from './../interface/index';


@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  // props
  id;
  contacts: Array<Contact> = data;
  currentContact: Contact;
  // function constructor ..
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = route.snapshot.paramMap.get('id');
    }

  setCurrentContact(contacts , id) {
    return contacts.map((contact) => {
      const contactId  = Number(id);
      // console.log(typeof(contactId) , typeof(contact.id))
      // console.log(contact.id);
      if (contact.id === contactId ) {
        // console.log(contact.id)
        return this.currentContact = contact;
      }
    });
  }

  ngOnInit() {
    this.setCurrentContact(this.contacts, this.id);
    console.log(this.id , this.currentContact);
  }
}
