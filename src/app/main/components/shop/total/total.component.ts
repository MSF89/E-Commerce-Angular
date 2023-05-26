import { Component, OnInit } from '@angular/core';
import { ShoppcartService } from 'src/app/main/services/shoppcart.service';
import { map } from 'rxjs'

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  total: number = 0

  constructor(private shoppCartService: ShoppcartService){}

  ngOnInit(): void {
    this.shoppCartService.products
    .pipe(map(products => {
      return products.reduce((prev, curr) =>prev + curr.price, 0)
    }))
    .subscribe(val => {
      this.total = val

    })
  }
}
