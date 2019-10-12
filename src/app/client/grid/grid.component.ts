import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClient} from '@angular/common/http';
import {Client} from '../services/client';
import {ClientsService} from '../services/clients.service';
import {MatDialog} from '@angular/material/dialog';
import {AddOrEditClientDialogComponent} from './dialogs/add-or-edit-client-dialog/add-or-edit-client-dialog.component';
import {ConfirmClientDeletionDialogComponent} from './dialogs/confirm-client-deletion-dialog/confirm-client-deletion-dialog.component';
import {MatSidenav} from '@angular/material/sidenav';
import {NgxSpinnerService} from 'ngx-spinner';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSnackBarService} from '../../shared/services/mat-snack-bar-service.service';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'gender',
    'pid',
    'phone',

    'view-icon',
    'edit-icon',
    'delete-icon'
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild('clientInfoSidenav', {static: false}) clientInfoSidenav: MatSidenav;



  constructor(private _httpClient: HttpClient,
              private _clientsService: ClientsService,
              private _matDialog: MatDialog,
              private _ngxSpinnerService: NgxSpinnerService,
              private _matSnackBar: MatSnackBar,
              private _snackBar: MatSnackBar,
              private _matSnackBarService: MatSnackBarService) {
  }

  ngOnInit() {
    this._fetchGridData();
  }


  private _fetchGridData() {
    this._ngxSpinnerService.show();
    this._clientsService.search().subscribe((clients: Client[]) => {
      this._ngxSpinnerService.hide();

      this.dataSource = new MatTableDataSource(clients);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddOrEditClientDialog() {
    this._matDialog.open(AddOrEditClientDialogComponent, {
      data: {}
    });
  }

  confirmDeletion(clientId: number) {
    const dialogRef = this._matDialog.open(ConfirmClientDeletionDialogComponent, {
      data: {
        id: null
      }
    });

    const deleteSubscription = dialogRef.componentInstance.onClientDelete.subscribe(() => {
      this._clientsService.delete(clientId).subscribe(() => {
        dialogRef.close();
        this._matSnackBarService.openSnackBar('კლიენტი წაიშალა');
        this._fetchGridData();
      });
    });

    dialogRef.afterClosed().subscribe(() => {
      deleteSubscription.unsubscribe();
    });
  }
}
