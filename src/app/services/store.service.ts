import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  // las variables observables por convencion se les coloca un sigo $ al final
  myCart$ = this.myCart.asObservable();
  total: number = 0;

  constructor() {}

  getShoppingCart() {
    return this.myShoppingCart;
  }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getTotal() {
    return (this.total = this.myShoppingCart.reduce(
      (acum, item) => acum + item.price,
      0
    ));
  }
}
