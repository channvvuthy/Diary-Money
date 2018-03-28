import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from  '@angular/forms';
import {RegisterPage} from  '../register/register';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  formGroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  phone: AbstractControl;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
    this.email=this.formGroup.controls['email'];
    this.password=this.formGroup.controls['password'];
  }

  LoginForm(){

  }
  registerForm(){
     this.navCtrl.push(RegisterPage);
  }

}
