import { MdDatepickerModule, MdInputModule, MdSelectModule } from '@angular/material';
// Angular Lib Core ...
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Contact Routing ...
import { AppContactRoutingModule } from './contact-routing.module';
// FilePicker ...
import { FilePickerModule } from 'angular-file-picker';
// Contact Service ...
import { ContactService } from './../shared/services/contacts/contact.service';

//  Contact Module Components ...
import { ContactsComponent } from './contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
    imports: [
        CommonModule,
        AppContactRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        // Angular Material Module Import..
        MdDatepickerModule,
        MdInputModule,
        MdSelectModule,
        // File Module Import ...
        FilePickerModule
    ],
    declarations: [
        ContactsComponent,
        AddContactComponent,
        ViewContactComponent,
        EditContactComponent
    ],
    providers: [ContactService]
})

export class AppContactModule {}
