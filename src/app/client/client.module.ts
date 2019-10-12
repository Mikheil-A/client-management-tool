import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientRoutingModule} from './client-routing.module';

// components
import {GridComponent} from './grid/grid.component';

// dialogs
import {AddOrEditClientDialogComponent} from './grid/dialogs/add-or-edit-client-dialog/add-or-edit-client-dialog.component';
import {ConfirmClientDeletionDialogComponent} from './grid/dialogs/confirm-client-deletion-dialog/confirm-client-deletion-dialog.component';

// sidenavs
import {ClientInfoSidenavComponent} from './grid/client-info-sidenav/client-info-sidenav.component';

// modules
import {SharedModule} from '../shared/shared.module';

// services
import {ClientsService} from './services/clients.service';


@NgModule({
  declarations: [
    GridComponent,
    AddOrEditClientDialogComponent,
    ConfirmClientDeletionDialogComponent,
    ClientInfoSidenavComponent
  ],
  providers: [
    ClientsService
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  entryComponents: [
    AddOrEditClientDialogComponent,
    ConfirmClientDeletionDialogComponent
  ]
})
export class ClientModule {
}
