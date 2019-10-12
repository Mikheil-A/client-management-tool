import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


// modules
import {MatModule} from '../mat/mat.module';

// services
import {MatSnackBarService} from './services/mat-snack-bar-service.service';


@NgModule({
  declarations: [],
  providers: [
    MatSnackBarService
  ],
  imports: [
    CommonModule,
    MatModule
  ],
  exports: [
    MatModule
  ]
})
export class SharedModule {
}
