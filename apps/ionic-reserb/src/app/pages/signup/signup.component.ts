import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import * as moment from 'moment';
import { BaseComponent } from '@reserb-app/core';
import { AlertController } from '@ionic/angular';

@Component({
  providers: [SignupService],
  selector: 'reserb-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent extends BaseComponent implements OnInit, OnDestroy {

  formSignup: FormGroup;
  maxDate = moment().toISOString();

  constructor(
    private router: Router,
    private signupService: SignupService,
    public alertController: AlertController,
  ) {
    super();
  }

  ngOnInit() {
    this.initForm();
    this.listenCreateCustomer();
  }

  ngOnDestroy(){
    super.ngOnDestroy();
  }

  submit() {
    const request =  this.prepareData();
    this.signupService.callCreateCustomerService(request);;
  }

  listenCreateCustomer() {
    this.signupService.createCustomer$.subscribe((data) => {
      if(data && data.status === 'success'){
        this.alertCreated();
      }
    });
  }

  async alertCreated() {
    const alert = await this.alertController.create({
      header: 'FELICIDADES !',
      message: 'El usuario ha sido creado con éxito.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.toLogin();
          }
        }
      ]
    });
    await alert.present();
  }

  prepareData(): any {
    const email = this.formSignup.get('email').value;
    const pass = this.formSignup.get('password').value;
    const name = this.formSignup.get('name').value;
    const lastName = this.formSignup.get('lastName').value;
    const birthdate = this.formSignup.get('birthdate').value;

    const request = {
      eMail: email,
      password: pass,
      forenames: name,
      surnames: lastName,
      birthdate: birthdate
    };
    return request;
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  initForm() {
    this.formSignup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      termsAndConditions: new FormControl(false, [Validators.required])
    })
  }


}
