import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements /* OnChanges, */ OnInit, DoCheck, OnDestroy {

  @Input() product: Product;

  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('1. constructor');
  }

  /* ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges');
    console.log(changes);
  } */

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart(): void {
    console.log('Agregue al carrito');
    this.productClicked.emit(this.product.id);
  }
}
