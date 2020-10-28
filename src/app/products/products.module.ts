import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent
  ]
})
export class ProductsModule { }
