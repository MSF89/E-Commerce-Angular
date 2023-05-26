
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/main/services/products.service';
import { Product } from '../../models/response/products.response';
import { Router } from '@angular/router';
import { ShoppcartService } from 'src/app/main/services/shoppcart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  products: Product[] = []
  product: Product

  constructor(private productsService: ProductsService, private shoppCartService: ShoppcartService,private router:Router){}

  ngOnInit(): void {
    this.getProducts()
  }

    

    getDetail(id: number){
      this.productsService.getProduct(id).subscribe({
        next: (product:Product)=> {
          this.product = product;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
          this.router.navigate(['/main/details'])
        }
      })}


    onClick(product:Product){
      this.shoppCartService.addNewProduct(product)
    }

    getProducts(){
      this.productsService.getProducts().subscribe({
        next: (product: Product[]) => {
          this.products = product
        },
        error: (err) => {
            console.log(err);
        },
        complete: () => {
         console.log('complete');

        }
      })
    }




}
