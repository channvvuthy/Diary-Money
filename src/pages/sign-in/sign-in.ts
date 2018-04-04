import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from  '@angular/forms';
import {RegisterPage} from  '../register/register';
import {AngularFireAuth} from "angularfire2/auth";
import {HomePage} from "../home/home";



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

    constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private afAuth: AngularFireAuth) {
        this.formGroup = this.formBuilder.group({
            email: ['', Validators.email],
            password: ['', Validators.required],
        });
        this.email = this.formGroup.controls['email'];
        this.password = this.formGroup.controls['password'];
    }

    async LoginForm(user) {
        try{
            const result=await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
            this.navCtrl.setRoot(HomePage);
        }catch(e){
            console.error(e);
        }
    }

    registerForm() {
        this.navCtrl.push(RegisterPage);
    }

}
