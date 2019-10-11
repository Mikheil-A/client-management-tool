import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientRoutingModule} from './client-routing.module';

// components
import {GridComponent} from './grid/grid.component';

// dialogs
import {AddOrEditClientDialogComponent} from './grid/dialogs/add-or-edit-client-dialog/add-or-edit-client-dialog.component';
import {ConfirmClientDeletionDialogComponent} from './grid/dialogs/confirm-client-deletion-dialog/confirm-client-deletion-dialog.component';

// modules
import {MatModule} from '../mat/mat.module';

// services
import {ClientsService} from './services/clients.service';


@NgModule({
  declarations: [
    GridComponent,
    AddOrEditClientDialogComponent,
    ConfirmClientDeletionDialogComponent
  ],
  providers: [
    ClientsService
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatModule
  ],
  exports: [],
  entryComponents: [
    AddOrEditClientDialogComponent,
    ConfirmClientDeletionDialogComponent
  ]
})
export class ClientModule {
}
