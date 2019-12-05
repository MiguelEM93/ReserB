import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserDataService } from '../shared/user-data.service';
import { ModalController } from '@ionic/angular';
import { BaseComponent } from '@reserb-app/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page extends BaseComponent implements OnInit, AfterViewInit {

  userInfo: any;

  constructor(
    private router: Router,
    public userDataService: UserDataService,
    public modalController: ModalController
  ) {
    super();
  }

  ngOnInit(): void {
    this.getUserData();
  }

  ngAfterViewInit() {}

  toItems() {
    this.router.navigate(['/home/tab2']);
  }

  getUserData() {
    this.userInfo = this.userDataService.userData;
    console.log("DATA", this.userInfo);
  }

}
