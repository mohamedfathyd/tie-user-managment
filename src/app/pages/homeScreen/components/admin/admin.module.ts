import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { CoreModule } from '../../../../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: AdminComponent },
];
@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SharedModule,CoreModule,
    DataTablesModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
