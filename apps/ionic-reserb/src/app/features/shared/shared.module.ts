import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@reserb-app/ionic';
import { AppComponentsModule } from '../../components/app-components.module';

const MODULES = [
  UIModule,
  AppComponentsModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
