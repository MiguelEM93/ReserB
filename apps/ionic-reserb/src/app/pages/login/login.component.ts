import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent } from '@reserb-app/core';
import {Router} from '@angular/router';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, takeUntil } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  providers: [LoginService],
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit, AfterViewInit {

  formLogin: FormGroup;

  constructor(
    private router: Router,
    protected loginService: LoginService,
    public alertController: AlertController
  ) {
    super();
    this.loginService.callCusotomersService();
  }

  ngOnInit() {
    this.initForm();
    this.listenLoginCredentials();
  }

  ngAfterViewInit() {
    this.loginService.customers$.subscribe((data) => {
      console.log("DATA", data);
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  initForm() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  
  prepareRequestData(): any {
    const email = this.formLogin.get('email').value;
    const password = this .formLogin.get('password').value;
    const request = {
      password,
      eMail: email
    };
    return request;
  }

  sendRequest() {
    const request = this.prepareRequestData();
    this.loginService.callLoginService(request);
  }

  listenLoginCredentials() {
    const filterData = (data) => data;
    this.loginService.login$
      .pipe(filter(filterData), takeUntil(this.destroy$))
      .subscribe((data) => {
        if(data.status === 'success'){
          this.router.navigate(['/home/tab1']);
        } else {
          this.presentAlert();
        }
    })
  }

  submit() {
    if(this.formLogin.valid){
      this.sendRequest();
    }
  }

  toSignUp() {
    this.router.navigate(['/signup']);
  }
}
