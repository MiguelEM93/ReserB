import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../../features/shared/shared.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [SharedModule, SignupRoutingModule],
  declarations: [SignupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignupModule {
}
