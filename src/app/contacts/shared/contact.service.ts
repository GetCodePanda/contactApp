import { Injectable } from '@angular/core';
import { CONTACTS } from './contact.mock';

@Injectable()
export class ContactService {

  constructor() { }
  getContacts() {
    return CONTACTS;
  }

  createNewContact(contact) {
    return CONTACTS.push(contact);
  }


}
