import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@reserb-app/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reserb-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent extends BaseComponent implements OnInit {

  formLogin : FormGroup;

  constructor(){
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

}
