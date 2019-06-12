import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SplashComponent }  from './splash/splash.component';
import { EmployeeComponent } from './employee/employee.component';
import { PatronComponent } from './patron/patron.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent,
    data: { preload: true }
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    data: { preload: true }
  },
  {
    path: 'patron',
    component: PatronComponent,
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
