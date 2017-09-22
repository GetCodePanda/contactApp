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
        redirectTo: 'contacts/view-all',
        pathMatch: 'full'
    },
    {   path: 'contacts' ,
        children: [
            {
                path: 'add',
                component: AddContactComponent,
                data: { title : 'Add Contacts' }
            },
            {
                path: 'view-all',
                component: ContactsComponent,
                data: { title: 'View All Contacts'}
            },
            {
                path: 'view/:id',
                component: ViewContactComponent,
                data: { title : 'View Contact'}
            },
            {
                path: 'edit/:id',
                component: EditContactComponent,
                data: {title: 'Edit Content'}
            }
        ]
    }
];


@NgModule({
    imports: [CommonModule , RouterModule.forChild(contactRouter)],
    exports: [RouterModule]
})

export class AppContactRoutingModule {}
