import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalCategoryService } from './modal-category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BaseComponent } from '@reserb-app/core';
import { filter, find } from 'ramda';

interface CategoryInterface {
  id: string,
  name: string,
  sector: string,
}

@Component({
  providers: [ModalCategoryService],
  selector: 'reserb-modal-category',
  templateUrl: 'modal-category.component.html',
  styleUrls: ['modal-category.component.scss'],
})
export class ModalCategoryComponent extends BaseComponent implements OnInit, AfterViewInit {

  formCategory: FormGroup;
  categoriesList: any;
  itemSelected: any;
  categorySelected: any;

  constructor(
    protected modalCategoryService: ModalCategoryService,
    public modalController: ModalController,
  ) {
    super();
  }

  ngOnInit() {
    this.modalCategoryService.callCategoriesService();
    this.listenCategories();
    this.initForm();
  }

  ngAfterViewInit() {
    this.listenSelectCategories();
  }

  listenCategories() {
    this.modalCategoryService.categories$.subscribe((data) => {
      if (data && data.length > 0) {
        this.categoriesList = data;
      }
    });
  }

  initForm(){
    this.formCategory = new FormGroup({
      categories: new FormControl(''),
      locales: new FormControl('')
    })
  }

  toChooseSchedule() {}

  listenSelectCategories() {
    this.formCategory.get('categories').valueChanges.subscribe((data: string) => {
      const catSelected = this.categoriesList.filter((a) => {
        return a.name === data.replace(/ /g, "");
      });
      const getId = catSelected[0].id;
      console.log("SELECCIONADO", getId);
    }); 
  }

  changeVal(event){}

  async close() {
    return this.modalController.dismiss();
  }

}
