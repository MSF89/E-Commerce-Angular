import { Product } from './../../models/response/products.response';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/main/services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  products: Product []
  query: string

  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProductId.subscribe((data)=>{
      this.productsService.getProduct(data).subscribe({
        next: (data: Product[])=>{
          this.products = data
        }
      })
    })
  }

}
