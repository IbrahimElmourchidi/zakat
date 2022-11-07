import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) }, { path: 'list', loadChildren: () => import('./courses-list/courses-list.module').then(m => m.CoursesListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
