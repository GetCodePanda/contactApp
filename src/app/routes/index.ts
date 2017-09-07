import {Routes} from '@angular/router';
import { ContactsComponent } from './../components/contacts/contacts.component';
import { AddContactComponent } from './../components/contacts/add-contact/add-contact.component';
import { ViewContactComponent } from './../components/contacts/view-contact/view-contact.component';
import { EditContactComponent } from './../components/contacts/edit-contact/edit-contact.component';
import { ViewProfileComponent } from './../components/profiles/view-profile/view-profile.component';
import { EditProfileComponent } from './../components/profiles/edit-profile/edit-profile.component';

const appRoutes:Routes = [
    {path:'', component:ContactsComponent},
    {path:'add-contacts', component:AddContactComponent , data:{title:"Here You Are"}},
    {path:'view-contacts', component:ContactsComponent},
    {path:'view-contact', component:ViewContactComponent},
    {path:'edit-contact', component:EditContactComponent},
    {path:'view-profile', component:ViewProfileComponent},
    {path:'edit-profile', component:EditProfileComponent},
];

export default appRoutes;