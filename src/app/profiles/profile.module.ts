import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// profile routing
import { AppProfileRoutingModule } from './profile-routing.module';
// Profile Service ...
import { UserProfileService } from './../core/user-profile.service';

// File Picker Module ...
import { FilePickerModule } from 'angular-file-picker';

// Profile Module ...
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
    imports: [
        CommonModule,
        AppProfileRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FilePickerModule
    ],
    declarations: [
        ViewProfileComponent,
        EditProfileComponent
    ],
    providers: [UserProfileService]
})

export class AppProfileModule {}
