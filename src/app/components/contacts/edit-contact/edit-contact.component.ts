// Angular Lib
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Sample data...
import { data } from './../../../api/index';
// Contact interface...
import { Contact } from './../interface/index';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  // props..
  id;
  contacts: Array<Contact> = data;
  currentContact: Contact;
  fileName: string;
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
    this.fileName = event.name;
    this.currentContact.avatar = event.dataURL;
    return;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.setCurrentContact(this.contacts, this.id);
    console.log(this.id , this.currentContact);
  }

}
