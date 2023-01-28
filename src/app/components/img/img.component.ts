import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  defaultImage: string = './assets/images/placeholder.png';

  constructor() {}

  ngOnInit(): void {}

  imgError() {
    this.img = this.defaultImage;
  }

  imgLoaded() {
    console.log('child log');
    this.loaded.emit(this.img);
  }
}
