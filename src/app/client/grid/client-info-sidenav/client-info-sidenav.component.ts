import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {AddAccountDialogComponent} from '../../../account/add-account-dialog/add-account-dialog.component';



@Component({
  selector: 'app-client-info-sidenav',
  templateUrl: './client-info-sidenav.component.html',
  styleUrls: ['./client-info-sidenav.component.scss']
})
export class ClientInfoSidenavComponent implements OnInit {
  @Input() sidenav: MatSidenav;


  constructor(private _matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  close() {
    this.sidenav.close();
  }

  openAddAccountDialog() {
    this._matDialog.open(AddAccountDialogComponent, {
      data: {}
    });
  }

}
