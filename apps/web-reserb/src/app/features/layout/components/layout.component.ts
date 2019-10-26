import { BaseComponent } from '@reserb-app/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'reserb-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent extends BaseComponent implements OnInit{

  constructor(private router: Router){
    super();
  }

  ngOnInit() {}

  toHome() {
    this.router.navigate(['/home']);
  }

  toSpaces() {
    this.router.navigate(['/mis-espacios']);
  }

  toReservations() {}

  toProfile() {}

}
