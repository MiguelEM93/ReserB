import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent } from '@reserb-app/core';
import {Router} from '@angular/router';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  providers: [LoginService],
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit, AfterViewInit {

  formLogin: FormGroup;
  showErrorMessage: boolean;

  constructor(private router: Router, protected loginService: LoginService) {
    super();
    this.loginService.callCusotomersService();
  }

  ngOnInit() {
    this.initForm();
    this.listenChangesEmail();
  }

  ngAfterViewInit() {
    this.loginService.customers$.subscribe((data) => {
      console.log("DATA", data);
    });
  }

  listenChangesEmail() {
    this.formLogin.get('email').valueChanges.subscribe((val) => {
      console.log("FORMULARIO", this.formLogin);
      if(val !== '') {
        this.showErrorMessage = false ;
      } else {
        this.showErrorMessage = true;
      }
    });
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

  toHome() {
    if(this.formLogin.valid){
      this.sendRequest();
      // this.router.navigate(['/home/tab1']);
    }
  }

  toSignUp() {
    this.router.navigate(['/signup']);
  }
}
