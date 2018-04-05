import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {SignInPage} from '../sign-in/sign-in';
import {HttpClient} from '@angular/common/http';
import {AlertController} from 'ionic-angular';
import {VerifyPage} from "../verify/verify";
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
    data: Observable<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: HttpClient, private alertCtrl: AlertController) {
        this.formGroup = this.formBuilder.group({
            email: ['', Validators.email],
            password: ['', Validators.required],
            phone: ['', Validators.required]
        });
        this.email = this.formGroup.controls['email'];
        this.password = this.formGroup.controls['password'];
        this.phone = this.formGroup.controls['phone'];
    }

    presentAlert(title,msg) {
        let alert = this.alertCtrl.create({
            title:title,
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    }

    registerForm(user) {
        if (this.formGroup.valid) {
            document.getElementById("loading").style.display = "block";
            let postData = new FormData();
            postData.append('email', user.email);
            postData.append('phone', user.phone);
            postData.append('password', user.password);
            this.data = this.http.post("http://localhost:8000/register", postData);
            this.data.subscribe(data => {
                if (data.success == true) {
                    document.getElementById("loading").style.display = "none";
                    this.formGroup.reset();
                    this.navCtrl.push(VerifyPage);
                } else {
                    document.getElementById("loading").style.display = "none";
                    this.presentAlert("Registration failed",data.error.email);
                }
            }, (err) => {
                this.presentAlert("Registration failed",JSON.stringify(err));
            });

        }
    }

    goToLogin() {
        this.navCtrl.push(SignInPage);
    }

}
