import { BaseComponent } from '@reserb-app/core';
import { Component, OnInit } from '@angular/core';
import { ModalPlaceService } from './modal-place.service';

@Component({
  providers:[ModalPlaceService],
  selector: 'reserb-modal-place',
  templateUrl: './modal-place.component.html',
  styleUrls: ['./modal-place.component.scss']
})
export class ModalPlaceComponent extends BaseComponent implements OnInit{

  constructor(){
    super();
  }

  ngOnInit() {

  }

}
