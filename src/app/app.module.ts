import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/components/product/product.component';
import { CartComponent } from './cart/components/cart.component';
import { ContactComponent } from './contact/components/contact.component';
import { ProductsComponent } from './products/components/products/products.component';
import { DemoComponent } from './demo/components/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './products/components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ContactComponent,
    ProductsComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
