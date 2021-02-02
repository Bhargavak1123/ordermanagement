import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ParticlesModule } from 'angular-particle';
import { AppRoutingModule } from './app-routing.module';
import {DatePipe} from '@angular/common';
import { NgDatepickerModule } from 'ng2-datepicker';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    AppRoutingModule,
    FormsModule,
    NgDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
