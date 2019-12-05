import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseComponent } from '@reserb-app/core';
import { ModalCategoryComponent } from '../../components';
import { Tab2Service } from './tab2.service';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  providers: [Tab2Service],
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page extends BaseComponent implements  OnInit, AfterViewInit{

  areasList: any[];

  constructor(
    public modalController: ModalController,
    protected tab2Service: Tab2Service
  ) {
    super();
    this.listenAreas();
  }

  ngOnInit() {
    this.tab2Service.callAreasService();
  }

  ngAfterViewInit() {}

  listenAreas() {
    const filterArea = (area) => area;
    this.tab2Service.areasService$
      .pipe(
        takeUntil(this.destroy$),
        filter(filterArea)
      )
      .subscribe((data) => {
        this.areasList = data;
      });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalCategoryComponent
    });
    return await modal.present();
  }

}
