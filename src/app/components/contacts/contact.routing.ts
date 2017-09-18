import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { ContactsComponent } from './contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const contactRouter: Routes = [
    {path: '', redirectTo: 'view-all' , pathMatch: 'full' },
    {path: 'view-all' , component: ContactsComponent},
    {path: 'add-contacts', component: AddContactComponent },
    {path: 'view-contacts', component: ContactsComponent},
    {path: 'view-contact/:id', component: ViewContactComponent},
    {path: 'edit-contact/:id', component: EditContactComponent}
];


@NgModule({
    imports: [RouterModule.forChild(contactRouter)],
    exports: [RouterModule]
})

export class AppContactRoutingModule {}
