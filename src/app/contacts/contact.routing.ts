import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { ContactsComponent } from './contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const contactRouter: Routes = [
    {
        path: 'contacts' ,
        component: ContactsComponent,
        data: { title : ' View All Contacts ' }
    },
    {
        path: 'add-contacts',
        component: AddContactComponent,
        data: { title : 'Add Contacts' }
    },
    {
        path: 'view-contacts',
        component: ContactsComponent,
        data: { title: 'View All Contacts'}
    },
    {
        path: 'view-contact/:id',
        component: ViewContactComponent,
        data: { title : 'View Contact'}
    },
    {
        path: 'edit-contact/:id',
        component: EditContactComponent,
        data: {title: 'Edit Content'}
    }
];


@NgModule({
    imports: [CommonModule , RouterModule.forChild(contactRouter)],
    exports: [RouterModule]
})

export class AppContactRoutingModule {}
