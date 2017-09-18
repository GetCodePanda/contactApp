// Angular Lib imports :
import { NgModule } from '@angular/core';
import {Routes , RouterModule } from '@angular/router';

// App Routing Module :
import { AppProfileRoutingModule } from './../components/profiles/profile.routing';
import { AppContactRoutingModule } from './../components/contacts/contact.routing';

// Component Imports :
import { ContactsComponent } from './../components/contacts/contacts.component';
import { AddContactComponent } from './../components/contacts/add-contact/add-contact.component';
import { ViewContactComponent } from './../components/contacts/view-contact/view-contact.component';
import { EditContactComponent } from './../components/contacts/edit-contact/edit-contact.component';
import { ViewProfileComponent } from './../components/profiles/view-profile/view-profile.component';
import { EditProfileComponent } from './../components/profiles/edit-profile/edit-profile.component';

export const appRoutes: Routes = [
    {
        path: 'contact',
        loadChildren: 'app/components/contacts/contact.module#AppContactModule',
        data: { perload: true}
    },
    {
        path: 'profile',
        loadChildren: 'app/components/profiles/profile.module#AppProfileModule',
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        AppProfileRoutingModule,
        AppContactRoutingModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
