import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Profile Component ...
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const profileRouter: Routes = [
    {path: 'view-profile' , component: ViewProfileComponent},
    {path: 'edit-profile', component: EditProfileComponent }
];

@NgModule({
    imports: [CommonModule , RouterModule.forChild(profileRouter)],
    exports: [RouterModule]
})

export class AppProfileRoutingModule {}
