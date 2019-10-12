import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-account-dialog',
  templateUrl: './add-account-dialog.component.html',
  styleUrls: ['./add-account-dialog.component.scss']
})
export class AddAccountDialogComponent implements OnInit {

  constructor(private _matDialogRef: MatDialogRef<AddAccountDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    console.log(this.data);
  }
}
