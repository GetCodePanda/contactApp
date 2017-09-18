// Angular Lib Core ...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Design ..
import { MdSelectModule, MdInputModule } from '@angular/material';

//  Contact Module Components :
import { ContactsComponent } from './contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
    declarations: [
        ContactsComponent,
        AddContactComponent,
        ViewContactComponent,
        EditContactComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdInputModule,
        MdSelectModule
    ],
    exports: []
})

export class AppContactModule {}
