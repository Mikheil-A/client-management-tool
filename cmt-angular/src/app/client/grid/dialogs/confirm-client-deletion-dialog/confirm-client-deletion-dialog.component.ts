import {Component, EventEmitter, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ClientsService} from '../../../services/clients.service';



@Component({
  selector: 'app-confirm-client-deletion-dialog',
  templateUrl: './confirm-client-deletion-dialog.component.html',
  styleUrls: ['./confirm-client-deletion-dialog.component.scss']
})
export class ConfirmClientDeletionDialogComponent {
  onClientDelete = new EventEmitter();


  constructor(public matDialogRef: MatDialogRef<ConfirmClientDeletionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _dialogData: any) {
  }


  onDelete() {
    this.onClientDelete.emit();
  }
}
