import { Component, OnInit } from '@angular/core';

interface Contact {
    id:number,
    first_name:string,
    last_name:string,
    middle_name:string,
    phone_number_one:number,
    phone_number_two:number,
    dob:string,
    age:number,
    email:string,
    permanent_address:string,
    alternate_address:string,
    avator:string
}

const data= [
  {id:1,
      first_name:"surendar",
      last_name:"kalyanam",
      middle_name:" ",
      phone_number_one:9344444494,
      phone_number_two:9896666666,
      dob:"30/01/1993",
      age:12,
      email:"sure@gmail.com",
      permanent_address:"No:123, Main Street, Villpuram",
      alternate_address:"No:232 , Sub Main Street, Villupuram",
      avator:"https://semantic-ui.com/images/avatar/small/elliot.jpg"
  },
  {   id:2,
      first_name:"sudhakar",
      last_name:"kalyanam",
      middle_name:" ",
      phone_number_one:9344444494,
      phone_number_two:9896666666,
      dob:"30/01/1993",
      age:12,
      email:"sudha@gmail.com",
      permanent_address:"No:123, Main Street, Villpuram",
      alternate_address:"No:232 , Sub Main Street, Villupuram",
      avator:"https://semantic-ui.com/images/avatar/small/elliot.jpg"
  },
  {   id:3,
      first_name:"vijay",
      last_name:" ",
      middle_name:" ",
      phone_number_one:9344444494,
      phone_number_two:9896666666,
      dob:"30/01/1993",
      age:12,
      email:"vijay@gmail.com",
      permanent_address:"No:123, Main Street, Villpuram",
      alternate_address:"No:232 , Sub Main Street, Villupuram",
      avator:"https://semantic-ui.com/images/avatar/small/elliot.jpg"
  },
  {   id:4,
      first_name:"Vinoth",
      last_name:"k",
      middle_name:" ",
      phone_number_one:9344444494,
      phone_number_two:9896666666,
      dob:"30/01/1993",
      age:12,
      email:"vino@gmail.com",
      permanent_address:"No:123, Main Street, Villpuram",
      alternate_address:"No:232 , Sub Main Street, Villupuram",
      avator:"https://semantic-ui.com/images/avatar/small/elliot.jpg"
  },
]


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
