import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

//Angular Material
import { 
  MdToolbarModule, 
  MdSidenavModule, 
  MdGridListModule, 
  MdIconModule, 
  MdMenuModule } from '@angular/material';

import appRoutes from './routes'

// Application components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ViewProfileComponent } from './components/profiles/view-profile/view-profile.component';
import { EditProfileComponent } from './components/profiles/edit-profile/edit-profile.component';
import { ViewContactComponent } from './components/contacts/view-contact/view-contact.component';
import { EditContactComponent } from './components/contacts/edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContactsComponent,
    AddContactComponent,
    ViewProfileComponent,
    EditProfileComponent,
    ViewContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MdSidenavModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
