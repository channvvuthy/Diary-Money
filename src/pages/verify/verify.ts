import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {AlertController} from 'ionic-angular';
import {SignInPage} from "../sign-in/sign-in";


/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-verify',
    templateUrl: 'verify.html',
})
export class VerifyPage {
    token: AbstractControl;
    formGroup: FormGroup;
    data: Observable<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: HttpClient,public  alertCtrl:AlertController) {
        this.formGroup = this.formBuilder.group({
            token: ['', Validators.required]
        });
        this.token = this.formGroup.controls['token'];
    }

    presentAlert(title, msg) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    }

    verifyForm(user) {
        this.data = this.http.get("http://localhost:8000/user/verify/" + user.token).subscribe(data => {
            if (data.success == true) {
                   this.navCtrl.push(SignInPage);
            } else {
               this.presentAlert("Verify","Verification code is invalid.");
            }
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VerifyPage');
    }

}
