import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LAYOUT_COMPONENTS, LayoutComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule',
      },
    ]
  },
]

@NgModule({
  imports:[SharedModule, RouterModule.forChild(routes)],
  declarations: [...LAYOUT_COMPONENTS],
  exports: [...LAYOUT_COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class LayoutModule {}
