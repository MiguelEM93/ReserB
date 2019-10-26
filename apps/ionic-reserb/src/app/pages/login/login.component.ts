import { Component } from '@angular/core';
import { BaseComponent } from '@reserb-app/core';
import {Router} from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: 'login.component.html'
})
export class LoginComponent extends BaseComponent {
  constructor(private router:Router) {
    super();
  }

  toHome() {
    this.router.navigate(['/home/tab1']);
  }
}
