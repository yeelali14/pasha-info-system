import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainNavbarComponent } from './main-navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [{ path: '', component: MainNavbarComponent }];

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MainNavbarModule {}
