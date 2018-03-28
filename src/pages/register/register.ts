import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {SignInPage} from '../sign-in/sign-in';
@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    formGroup: FormGroup;
    email: AbstractControl;
    password: AbstractControl;
    phone: AbstractControl;

    constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
        this.formGroup = this.formBuilder.group({
            email: ['', Validators.email],
            password: ['', Validators.required],
            phone: ['', Validators.required]
        });
        this.email=this.formGroup.controls['email'];
        this.password=this.formGroup.controls['password'];
        this.phone=this.formGroup.controls['phone'];
    }

    registerForm(){
          if(this.formGroup.valid){
              console.log(this.formGroup.controls["email"].value)
          }
    }
    goToLogin(){
       this.navCtrl.push(SignInPage);
    }

}
