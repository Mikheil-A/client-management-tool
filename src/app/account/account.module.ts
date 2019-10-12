import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {AddAccountDialogComponent} from './add-account-dialog/add-account-dialog.component';



@NgModule({
  declarations: [AddAccountDialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    AddAccountDialogComponent
  ]
})
export class AccountModule {
}
