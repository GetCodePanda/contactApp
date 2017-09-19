import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  path = 'https://contact-13fe7.firebaseio.com/contacts.json';
  constructor() { }
    // Create New Contact ..
  // createContact( contact) {
  //   const postData = {...contact};
  //   const updates = {};
  //   const newPostKey = firebase.database().ref().child('contacts').push().key;
  //   updates['/contacts/' + newPostKey] = postData;
  //   return firebase.database().ref().update(updates);
  // }
  //   // fetch all contacts from the db...
  // getAllContacts() {
  //   return firebase.database().ref('/contacts/').once('value').then(function(snapshot) {
  //     return console.log(snapshot.val());
  //   });
  // }
  //   // fetch particular contact from the db..
  // getContact(id) {
  //   return firebase.database()
  //   .ref('/contacts').orderByChild('id').equalTo(id).once('value')
  //   .then((snapshot) => snapshot.val());
  // }

  // // Edit a particular contact ...
  // editContact(contact) {
  //   const postData = {...contact};
  //   const updates = {};
  //   const newPostKey = firebase.database().ref().child('contacts').push().key;
  //   updates['/contacts/' + contact.id + newPostKey] = postData;
  //   return firebase.database().ref().update(updates);
  // }

}
