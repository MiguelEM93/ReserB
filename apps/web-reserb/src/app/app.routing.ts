// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { SharedModule } from './features/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: './features/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
