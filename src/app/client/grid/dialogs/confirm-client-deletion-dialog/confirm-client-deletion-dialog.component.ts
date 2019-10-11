import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-client-deletion-dialog',
  templateUrl: './confirm-client-deletion-dialog.component.html',
  styleUrls: ['./confirm-client-deletion-dialog.component.scss']
})
export class ConfirmClientDeletionDialogComponent implements OnInit {

  constructor(private _matDialogRef: MatDialogRef<ConfirmClientDeletionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    console.log(this.data);
  }

}
