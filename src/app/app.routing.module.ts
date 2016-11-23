import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GeothermalHeatingComponent } from './geothermalHeating.component';
// import { ProtocolsComponent } from './protocols/protocols.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'geothermalHeating', component: GeothermalHeatingComponent },
    // { path: 'protocols', component: ProtocolsComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }