import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app--or-edit-add-client-dialog',
  templateUrl: './add-or-edit-client-dialog.component.html',
  styleUrls: ['./add-or-edit-client-dialog.component.scss']
})
export class AddOrEditClientDialogComponent implements OnInit {

  constructor(private _matDialogRef: MatDialogRef<AddOrEditClientDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    console.log(this.data);
  }

}
