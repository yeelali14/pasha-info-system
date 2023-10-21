import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


const routes: Routes = [{ path: '', component: DepartmentsComponent }];

@NgModule({
  declarations: [],
  imports: [MatListModule, MatSidenavModule, CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsModule {}
