import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalCategoryService } from './modal-category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BaseComponent } from '@reserb-app/core';
import { Capacitor, Plugins, GeolocationPosition } from '@capacitor/core';
import { Observable, of, from as fromPromise } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { LoadingController, AlertController } from '@ionic/angular';

const { Toast, Geolocation } = Capacitor.Plugins;

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
  public coordinates$: Observable<GeolocationPosition>;
  public defaultPos= { latitude:42, longitude: 9 };

  constructor(
    protected modalCategoryService: ModalCategoryService,
    public modalController: ModalController,
    public loading: LoadingController,
    public alertCtrl: AlertController
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

  async displayLoader() {
    const loading = await this.loading.create({
      message: 'Please wait...'
    });
    await loading.present();
    return loading;
  }

  private async presentAlert(message: string): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      header: 'Error!',
      subHeader: 'Estas sin conexiòn',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
    return alert;
  }

  private async getCurrentPosition(): Promise<any> {
    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('Err: plugin is not available');
      return of(new Error('Error! Plugin no disponible'));
    }
    const POSITION = Plugins.Geolocation.getCurrentPosition()
    .catch(err => {
      console.log('ERROR', err);
      return new Error(err.message || 'customized message');
    });
    this.coordinates$ = fromPromise(POSITION).pipe(
      switchMap((data: any) => of(data.coords)),
      tap(data => console.log(data))
    );
    return POSITION;
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

  showMap() {
    this.displayLoader()
    .then((loader: any) => {
      return this.getCurrentPosition()
      .then(position => {
        loader.dismiss();
        return position;
      })
      .catch(err => {
        loader.dismiss();
        return null;
      });
    })
    .then(position => (position instanceof Error) ? this.presentAlert(position.message) : null)
    .catch(err => {
      this.presentAlert(err.message);
    });
  }

  listenSelectCategories() {
    this.formCategory.get('categories').valueChanges.subscribe((data: string) => {
      const catSelected = this.categoriesList.filter((a) => {
        return a.name === data.replace(/ /g, "");
      });
      const getId = catSelected[0].id;
      console.log("SELECCIONADO", getId);
      this.modalCategoryService.callLocalesService(getId);
    });
  }

  changeVal(event){}

  async close() {
    return this.modalController.dismiss();
  }

}
