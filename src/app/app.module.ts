import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {RegisterPage} from  '../pages/register/register';
import {SignInPage} from  '../pages/sign-in/sign-in';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "angularfire2/auth";
import {HttpClientModule} from '@angular/common/http';
import {VerifyPage} from "../pages/verify/verify";
import {SMS} from "@ionic-native/sms";
import { CallNumber } from '@ionic-native/call-number';



@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RegisterPage,
        SignInPage,
        VerifyPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        HttpClientModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RegisterPage,
        SignInPage,
        VerifyPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        SMS,
        CallNumber,
    ]
})
export class AppModule {
}
