import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridComponent} from './grid/grid.component';

import {ClientRoutingModule} from './client-routing.module';
import {MatModule} from '../mat/mat.module';


@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatModule
  ],
  exports: []
})
export class ClientModule {
}
