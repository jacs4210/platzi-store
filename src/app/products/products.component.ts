import { ProductsService } from './../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  public onProductClicked(id: number): void {
    console.log('Product id: ', id);
  }

}
