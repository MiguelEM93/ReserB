import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LOGIN_COMPONENTS, LoginComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...LOGIN_COMPONENTS],
  exports: [...LOGIN_COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
