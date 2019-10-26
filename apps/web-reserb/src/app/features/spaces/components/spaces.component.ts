import { BaseComponent } from '@reserb-app/core';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  host: { class: 'reserb-spaces' },
  selector: 'reserb-spaces',
  templateUrl: 'spaces.component.html',
  styleUrls: ['spaces.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SpacesComponent extends BaseComponent {

  constructor(){
    super();
  }

}
