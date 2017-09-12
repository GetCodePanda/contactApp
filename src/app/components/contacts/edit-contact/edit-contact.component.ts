import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { data } from './../../../api/index';
import { Contact } from './../interface/index';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  id;
  contacts: Array<Contact> = data;
  currentContact: Contact;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

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

  setImagePreview(event) {
    return null;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.setCurrentContact(this.contacts, this.id);
    console.log(this.id , this.currentContact);
  }

}
