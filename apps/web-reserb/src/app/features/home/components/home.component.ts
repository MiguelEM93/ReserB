import { Component } from '@angular/core';

import { BaseComponent } from '@reserb-app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'reserb-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent extends BaseComponent {

  constructor(protected router: Router) {
    super();
  }

  toRegisterSpace() {
    this.router.navigate(['/mis-espacios']);
  }

}
