import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmReportsComponent } from './em-reports.component';

const routes: Routes = [
  { path: '', component: EmReportsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EmReportsComponent
  ]
})
export class EmReportsModule { } 