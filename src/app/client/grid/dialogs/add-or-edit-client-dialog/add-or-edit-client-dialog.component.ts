import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientsService} from '../../../services/clients.service';



@Component({
  selector: 'app--or-edit-add-client-dialog',
  templateUrl: './add-or-edit-client-dialog.component.html',
  styleUrls: ['./add-or-edit-client-dialog.component.scss']
})
export class AddOrEditClientDialogComponent implements OnInit {
  addOrEditTitle: string = 'დამატება';
  private _clientData; // this is assigned to null when dialog is set to adding mode


  formGroup: FormGroup;
  private _inputFieldsInitialValues = {
    'firstName': null,
    'lastName': null,
    'gender': null,
    'pid': null,
    'phone': null,
    'laCountry': null,
    'laCity': null,
    'laAddress': null,
    'aaCountry': null,
    'aaCity': null,
    'aaAddress': null
  };


  constructor(private _matDialogRef: MatDialogRef<AddOrEditClientDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _dialogData: any,
              private _clientsService: ClientsService) {
    this._clientData = this._dialogData;
  }

  ngOnInit() {
    if (this._clientData) {
      this._setDialogToEditingMode();
    }
    this._initializeForm();
  }


  private _setDialogToEditingMode() {
    this.addOrEditTitle = 'ჩასწორება';

    // Setting clicked record values to input fields
    this._inputFieldsInitialValues.firstName = this._clientData.firstName;
    this._inputFieldsInitialValues.lastName = this._clientData.lastName;
    this._inputFieldsInitialValues.gender = this._clientData.gender;
    this._inputFieldsInitialValues.pid = this._clientData.pid;
    this._inputFieldsInitialValues.phone = this._clientData.phone;
    this._inputFieldsInitialValues.laContry = this._clientData.legalAddress.country;
    this._inputFieldsInitialValues.laCity = this._clientData.legalAddress.city;
    this._inputFieldsInitialValues.laAddress = this._clientData.legalAddress.address;
    this._inputFieldsInitialValues.aaContry = this._clientData.actualAddress.country;
    this._inputFieldsInitialValues.aaCity = this._clientData.actualAddress.city;
    this._inputFieldsInitialValues.aaAddress = this._clientData.actualAddress.address;
  }

  private _initializeForm() {
    this.formGroup = new FormGroup({
      'firstName': new FormControl(this._inputFieldsInitialValues.firstName, Validators.required),
      'lastName': new FormControl(this._inputFieldsInitialValues.lastName, Validators.required),
      'gender': new FormControl(this._inputFieldsInitialValues.gender, [Validators.required, Validators.email]),
      'pid': new FormControl(this._inputFieldsInitialValues.pid, Validators.required),
      'phone': new FormControl(this._inputFieldsInitialValues.phone, Validators.required),
      'laCountry': new FormControl(this._inputFieldsInitialValues.laCountry, Validators.required),
      'laCity': new FormControl(this._inputFieldsInitialValues.laCity, Validators.required),
      'laAddress': new FormControl(this._inputFieldsInitialValues.laAddress, Validators.required),
      'aaCountry': new FormControl(this._inputFieldsInitialValues.aaCountry, Validators.required),
      'aaCity': new FormControl(this._inputFieldsInitialValues.aaCity, Validators.required),
      'aaAddress': new FormControl(this._inputFieldsInitialValues.aaAddress, Validators.required)
    });
  }

  closeDialog(wasAClientAdded: boolean) {
    this._matDialogRef.close(wasAClientAdded);
  }

  save() {
    if (this.formGroup.valid) {
      const requestData = this.formGroup.value;
      requestData['legalAddress'] = {
        country: 'x',
        city: 'x',
        address: 'x'
      };
      requestData['actualAddress'] = {
        country: 'x',
        city: 'x',
        address: 'x'
      };

      if (this._clientData) {
        // if the dialog is in editing mode
        this._clientsService.update(this._clientData.id, requestData).subscribe(() => {
          this.closeDialog(true);
        });
      } else {
        this._clientsService.create(requestData).subscribe(() => {
          this.closeDialog(true);
        });
      }
    }
  }
}
