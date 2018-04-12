import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {AlertController} from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';


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

    constructor(private callNumber: CallNumber,public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: HttpClient,public  alertCtrl:AlertController,private sms: SMS) {
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
        // this.data = this.http.get("http://localhost:8000/user/verify/" + user.token).subscribe(data => {
        //     console.log(data.success)
        // });
        this.callNumber.callNumber("+85569315371", true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VerifyPage');
    }

}
