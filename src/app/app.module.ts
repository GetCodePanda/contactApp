import { CoreModule } from './core/core.module';
import { UserProfileService } from './core/user-profile.service';
import { CommonModule } from '@angular/common';
// Angular Lib Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// App Root Routing Module import ...
import { AppRoutingModule } from './app-routing.module';


// App Modules imports ...
import { AuthModule } from './auth/auth.module';
import { AppProfileModule } from './profiles/profile.module';
import { AppContactModule } from './contacts/contact.module';


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

import { HeaderComponent } from './shared/components/admin/header/header.component';
import { FooterComponent } from './shared/components/admin/footer/footer.component';
import { SidebarComponent } from './shared/components/admin/sidebar/sidebar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';



@NgModule({
  imports: [
    // angular core ..
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    // Core module ..
    CoreModule,
    // Routing..
    AppRoutingModule,
    // App Other Module ..
    AuthModule,
    AppContactModule,
    AppProfileModule,
    // Angular Material ..
    MdSidenavModule,
    MdGridListModule,
    MdIconModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdInputModule,
    MdSelectModule,
    MdMenuModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
