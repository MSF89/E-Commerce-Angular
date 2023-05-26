import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/shop/product/product.component';
import { DetailComponent } from './components/shop/detail/detail.component';
import { ShoppingcartComponent } from './components/shop/shoppingcart/shoppingcart.component';
import { TotalComponent } from './components/shop/total/total.component';

@NgModule({
  declarations: [
    ProductComponent,
    DetailComponent,
    HeaderComponent,
    ShopComponent,
    ShoppingcartComponent,
    MainComponent,
    TotalComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
  ],
  providers: [
  ]
})
export class MainModule { }
