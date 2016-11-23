import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { GeothermalHeatingComponent } from './geothermalHeating.component';
import { NavigationComponent } from './shared';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    GeothermalHeatingComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
