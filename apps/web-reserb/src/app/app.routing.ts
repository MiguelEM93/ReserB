// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { SharedModule } from './features/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule'
  },
  {
    path: '',
    loadChildren: './features/layout/layout.module#LayoutModule'
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [SharedModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
