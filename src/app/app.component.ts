import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store-2023';
  imgParent = '';
  showImage: boolean = true;

  toggleImg() {
    this.showImage = !this.showImage;
  }

  onLoaded(img: string) {
    console.log('parent log', img);
  }
}
