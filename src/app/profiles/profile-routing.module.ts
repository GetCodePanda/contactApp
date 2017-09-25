import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Profile Component ...
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

// import { HeaderComponent } from '../shared/components/admin/header/header.component';
// import { SidebarComponent } from '../shared/components/admin/sidebar/sidebar.component';
// import { FooterComponent } from '../shared/components/admin/footer/footer.component';


const profileRouter: Routes = [
    {
        path: 'profiles' ,
        redirectTo: 'profiles/view',
        pathMatch: 'full'
    },
    {
        path: 'profiles' ,
        children: [
            {
                path: 'view' ,
                component: ViewProfileComponent,
                data: { title : 'View Profile'}
            },
            {
                path: 'edit',
                component: EditProfileComponent,
                data: { title: 'Edit Profile'}
            }
        ]
    }
    // ,
    // { path: '' , component: HeaderComponent, outlet: 'header'},
    // { path: '' , component: SidebarComponent, outlet: 'sidebar'},
    // { path: '' , component: FooterComponent, outlet: 'footer'}
];

@NgModule({
    imports: [CommonModule , RouterModule.forChild(profileRouter)],
    exports: [RouterModule]
})

export class AppProfileRoutingModule {}
