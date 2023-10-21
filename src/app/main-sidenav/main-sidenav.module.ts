import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainSidenavComponent } from './main-sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


const routes: Routes = [{ path: '', component: MainSidenavComponent }];

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MainSidenavModule {}
