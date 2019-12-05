import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SPACES_COMPONENTS, SpacesComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: SpacesComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...SPACES_COMPONENTS],
  exports: [...SPACES_COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SpacesModule {}
