import { CommonModule } from '@angular/common';
// Angular Lib Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// App Root Routing Module import ...
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';


// App Modules imports ...
import { AppProfileModule } from './components/profiles/profile.module';
import { AppContactModule } from './components/contacts/contact.module';

// SERVICES
import { UserService } from './services/user.service';



// Angular Material
import {
  MdToolbarModule,
  MdSidenavModule,
  MdGridListModule,
  MdIconModule,
  MdMenuModule,
  MdInputModule,
  MdSelectModule,
  MdDatepickerModule,
  MdNativeDateModule} from '@angular/material';

// Application components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    // angular core ..
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    // Routing..
    AppRoutingModule,
    // App Other Module ..
    AppContactModule,
    AppProfileModule,
    // Angular Material
    MdSidenavModule,
    MdGridListModule,
    MdIconModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdInputModule,
    MdSelectModule,
    MdMenuModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
