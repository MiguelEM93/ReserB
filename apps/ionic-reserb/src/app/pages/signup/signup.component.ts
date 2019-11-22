import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import * as moment from 'moment';

@Component({
  providers: [SignupService],
  selector: 'reserb-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  formSignup: FormGroup;
  maxDate = moment().toISOString();

  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit() {
    this.initForm();
  }

  submit() {
    // this.router.navigate(['/login']);
    const request =  this.prepareData();
    this.signupService.callCreateCustomerService(request);;
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
