import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GridComponent} from './grid/grid.component';


const routes: Routes = [
  {path: '', redirectTo: 'Clients', pathMatch: 'full'},
  {path: 'Clients', component: GridComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
