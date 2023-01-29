import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  total: number = 0;

  constructor() {}

  getShoppingCart() {
    return this.myShoppingCart;
  }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
  }

  getTotal() {
    return (this.total = this.myShoppingCart.reduce(
      (acum, item) => acum + item.price,
      0
    ));
  }
}
