import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './components/shop/shop.component';
import { DetailComponent } from './components/shop/detail/detail.component';
import { ShoppingcartComponent } from './components/shop/shoppingcart/shoppingcart.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent, title: 'Productos'},
  {path: 'details', component: DetailComponent, title: 'Descripcion'},
  {path: '', redirectTo: 'shop', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
