import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total: number = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      id: '3',
      name: 'Colleción de albummes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
  ];

  constructor(private storeService: StoreService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {}

  onAddToShoppingCart(product: Product) {
    console.log(product);
    // this.myShoppingCart.push(product);
    // //this.total += product.price;
    // this.total = this.myShoppingCart.reduce(
    //   (acum, item) => acum + item.price,
    //   0
    // );
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
