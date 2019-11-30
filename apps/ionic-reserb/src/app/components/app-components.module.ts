import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { COMPONENTS, ModalCategoryComponent } from './index';
import { UIModule } from '@reserb-app/ionic';
import { CategoriesService } from '@reserb-app/core/services/api';

@NgModule({
  imports: [UIModule, CommonModule],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS],
  exports: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ModalCategoryComponent, CategoriesService],
})
export class AppComponentsModule {}
