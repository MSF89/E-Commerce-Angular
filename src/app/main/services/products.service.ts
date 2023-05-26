import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProductId: EventEmitter<number> = new EventEmitter<number>()

  private readonly URL_API = 'https://fakestoreapi.com/'

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.URL_API}products`)
  }
  getProduct(id:number){
    return this.http.get(`${this.URL_API}products/${id}`)
  }
}
