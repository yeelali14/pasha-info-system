import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main-navbar', loadChildren: () => import('./main-navbar/main-navbar.module').then(m => m.MainNavbarModule) },
  { path: 'main-sidenav', loadChildren: () => import('./main-sidenav/main-sidenav.module').then(m => m.MainSidenavModule) },
  { path: 'map', loadChildren: () => import('./interests-map/interests-map.module').then(m => m.InterestsMapModule) },
  { path: 'departments', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo: 'main-navbar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
