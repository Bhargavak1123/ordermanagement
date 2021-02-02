import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path : 'login', component:LoginComponent},
  {path : 'orders', component:OrdersComponent}
]
@NgModule({
  imports: [
    CommonModule,
  [RouterModule.forRoot(routes)],
  

  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
