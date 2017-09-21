import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Contact Service
import { ContactService } from './../../shared/services/contacts/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  // props
  id;
  contactsData;
  currentContact;
  // function constructor ..
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _contactService: ContactService
  ) {
    this.id = route.snapshot.paramMap.get('id');
    }

  setCurrentContact(contacts , id) {
    return this.contactsData.map((contact) => {
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
    this.contactsData = this._contactService.getContacts();

    this.setCurrentContact(this.contactsData, this.id);
    console.log(this.id , this.currentContact);
  }
}
