import { AppProfileRoutingModule } from './profile.routing';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// File Picker Module ...
import { FilePickerModule } from 'angular-file-picker';
// Profile Module ..
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
    declarations: [
        ViewProfileComponent,
        EditProfileComponent
    ],
    imports: [
        CommonModule,
        AppProfileRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FilePickerModule
    ]
})

export class AppProfileModule {}
