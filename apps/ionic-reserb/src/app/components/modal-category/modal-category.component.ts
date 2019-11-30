import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../../libs/core/index';
import { ModalCategoryService } from './modal-category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isEmpty } from 'rxjs/operators';

@Component({
  providers: [ModalCategoryService],
  selector: 'reserb-modal-category',
  templateUrl: 'modal-category.component.html',
  styleUrls: ['modal-category.component.scss'],
})
export class ModalCategoryComponent extends BaseComponent implements OnInit, AfterViewInit {

  formCategory: FormGroup;
  categoriesList: any;
  firstValueOfSelect: any;

  constructor(protected modalCategoryService: ModalCategoryService) {
    super();
  }

  ngOnInit() {
    this.modalCategoryService.callCategoriesService();
    this.initForm();
  }

  ngAfterViewInit() {
    this.modalCategoryService.categories$.subscribe((data) => {
      console.log("LISTA", data);
      if (data && data.length > 0) {
        this.categoriesList = data;
      }
    });
  }

  initForm(){
    this.formCategory = new FormGroup({
      categories: new FormControl('')
    })
  }

  toChooseSchedule() {
    console.log("CATEGORIA", this.formCategory.get('categories').value);
  }

}
