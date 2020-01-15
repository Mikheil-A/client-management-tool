import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


// modules
import {MatModule} from '../mat/mat.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


// services
import {MatSnackBarService} from './services/mat-snack-bar-service.service';


@NgModule({
  declarations: [],
  providers: [
    MatSnackBarService
  ],
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MatModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule {
}
