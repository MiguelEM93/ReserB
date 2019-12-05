import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@reserb-app/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginConstants } from './login.constants';

@Component({
  selector: 'reserb-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent extends BaseComponent implements OnInit {

  formLogin : FormGroup;


  constructor(protected readonly router: Router,){
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  initForm(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    if(this.formLogin.valid){
      this.router.navigate([LoginConstants.HOME]);
    }
  }

}
