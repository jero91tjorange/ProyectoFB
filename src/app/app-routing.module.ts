import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'login', pathMatch: 'full'},  
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),},
  {path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
