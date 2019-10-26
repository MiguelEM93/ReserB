import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule]
})
export class SignupRoutingModule {
}
