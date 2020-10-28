import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DemoComponent } from './components/demo.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
