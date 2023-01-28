import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';

  @Input('img') set changeImg(newImg: string) {
    this.img = newImg;
    console.log('just change image ==>', this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  defaultImage: string = './assets/images/placeholder.png';
  // counter: number = 0;
  // counterFn: number | undefined;

  constructor() {
    // never run async - fetch
    // run once
    console.log('Constructor imgValue ==> ', this.img);
  }
  ngOnDestroy(): void {
    // delete the component
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }
  ngAfterViewInit(): void {
    // run after render
    // handler child components here!
    console.log('ngAfterViewInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // run before and during
    // before render
    // update change inputs, run many times
    console.log('ngOnChanges imgValue ==> ', this.img);
    console.log(changes);
  }

  ngOnInit(): void {
    // run before render
    // run once
    // run async - fetch, query apis, you must use this method to do this!
    console.log('ngOnInit imgValue ==> ', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter++;
    //   console.log('run counter');
    // }, 1000);
  }

  imgError() {
    this.img = this.defaultImage;
  }

  imgLoaded() {
    console.log('child log');
    this.loaded.emit(this.img);
  }
}
