import { CommonModule } from '@angular/common';
// Angular Lib imports :
import { NgModule } from '@angular/core';
import {Routes , RouterModule } from '@angular/router';

// App Routing Module :
import { AppContactRoutingModule } from './contacts/contact-routing.module';
import { AppProfileRoutingModule } from './profiles/profile-routing.module';




export const appRoutes: Routes = [
    {
        path: 'contacts',
        loadChildren: './contacts/contact.module#AppContactModule',
    },
    {
        path: 'profiles',
        loadChildren: './profiles/profile.module#AppProfileModule',
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
        AppProfileRoutingModule,
        AppContactRoutingModule
    ],
    exports: [
        RouterModule
    ]
})

export class  AppRoutingModule {}
