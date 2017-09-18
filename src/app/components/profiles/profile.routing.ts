import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Profile Component ...
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const profileRouter: Routes = [
    {path: '', redirectTo: 'view-profile' , pathMatch: 'full' },
    {path: 'view-profile' , component: ViewProfileComponent},
    {path: 'edit-profile', component: EditProfileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(profileRouter)],
    exports: [RouterModule]
})

export class AppProfileRoutingModule {}
