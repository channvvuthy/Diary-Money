import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {SignInPage} from '../sign-in/sign-in';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
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
    data:Observable<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,public http: HttpClient) {
        this.formGroup = this.formBuilder.group({
            email: ['', Validators.email],
            password: ['', Validators.required],
            phone: ['', Validators.required]
        });
        this.email=this.formGroup.controls['email'];
        this.password=this.formGroup.controls['password'];
        this.phone=this.formGroup.controls['phone'];
    }

     registerForm(user){
          if(this.formGroup.valid){
              var url="http://365daymarket.com/api/product/1";
              this.data=this.http.get(url);
              this.data.subscribe(data=>{
                 console.log(data);
              });
          }
    }
    goToLogin(){
       this.navCtrl.push(SignInPage);
    }

}
