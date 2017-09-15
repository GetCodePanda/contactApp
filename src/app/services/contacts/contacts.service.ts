import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  path = 'https://contact-13fe7.firebaseio.com/contacts.json';

  constructor() { }

  createContact( contact) {
    const postData = {};
    const updates = {};
    const newPostKey = firebase.database().ref().child('contacts').push().key;
    updates['/contacts/' + newPostKey] = postData;
    return firebase.database().ref().update(updates);
  }

  getAllContacts() {
    return firebase.database().ref('/contacts/').once('value').then(function(snapshot) {
      return console.log(snapshot.val());
    });
  }

  getContact(id) {
    return firebase.database()
    .ref('/contacts').orderByChild('id').equalTo(id).once('value')
    .then((snapshot) => snapshot.val());
  }

}
