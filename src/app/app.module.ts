import { UserProfileService } from './core/user-profile.service';
import { CommonModule } from '@angular/common';
// Angular Lib Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// App Root Routing Module import ...
import { AppRoutingModule } from './app-routing.module';


// App Modules imports ...
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
  import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
  import { FooterComponent } from './shared/components/footer/footer.component';
  import { HeaderComponent } from './shared/components/header/header.component';



@NgModule({
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
    SidebarComponent
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
