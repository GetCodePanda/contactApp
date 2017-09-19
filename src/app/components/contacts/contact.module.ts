import { MdDatepickerModule, MdInputModule, MdSelectModule } from '@angular/material';
import { AppContactRoutingModule } from './contact.routing';
// Angular Lib Core ...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilePickerModule } from 'angular-file-picker';

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
        AppContactRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        // Md
        MdDatepickerModule,
        MdInputModule,
        MdSelectModule,
        FilePickerModule
    ]
})

export class AppContactModule {}
