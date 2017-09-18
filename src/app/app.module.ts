// Angular Lib Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// App Root Routing Module import ...
import { AppRoutingModule } from './routes/index';

// App Modules imports ...
import { AppProfileModule } from './components/profiles/profile.module';
import { AppContactModule } from './components/contacts/contact.module';

// SERVICES
import { UserService } from './services/user.service';

// File Picker Module ...
import { FilePickerModule } from 'angular-file-picker';


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

import {appRoutes} from './routes';

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
    // Routing..
    AppRoutingModule,
    // App Other Module ..
    AppContactModule,
    AppProfileModule,
    // Angular Material
    MdSidenavModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule,
    MdInputModule,
    MdSelectModule,
    MdNativeDateModule,
    MdDatepickerModule,
    // File Picker Module
    FilePickerModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
