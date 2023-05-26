import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/response/products.response';
import { ShoppcartService } from 'src/app/main/services/shoppcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit{

  products: Product[] = []

  constructor(private shoppCartService: ShoppcartService){ }

  ngOnInit(): void {
    this.shoppCartService.products.subscribe(products => {
      this.products = products
    })
  }

  deleteClick(id: number){
    this.shoppCartService.deleteProduct(id)
  }

}
