import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import { CustomersService } from '@reserb-app/core/services/api/customers.service';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule],
  providers: [CustomersService]
})
export class SignupRoutingModule {
}
