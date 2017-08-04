var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";
import { CameraScannerBarcode } from "../components/camera/camera";
import { QRScanner } from "@ionic-native/qr-scanner";
import { LoginPage } from "../pages/login/login";
import { NotiryPage } from "../pages/notiry/notiry";
import { CausePage } from "../pages/cause/cause";
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { TellPage } from "../pages/tell/tell";
import { CallNumber } from '@ionic-native/call-number';
import { ShowalertComponent } from '../components/showalert/showalert';
import { Facebook } from '@ionic-native/Facebook';
import { NewsPage } from "../pages/news/news";
import { QuastPage } from "../pages/quast/quast";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                AboutPage,
                CameraScannerBarcode,
                LoginPage,
                NotiryPage,
                CausePage,
                TellPage,
                ShowalertComponent,
                NewsPage,
                QuastPage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                AboutPage,
                CameraScannerBarcode,
                LoginPage,
                NotiryPage,
                CausePage,
                TellPage,
                NewsPage,
                QuastPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                Camera,
                BarcodeScanner,
                QRScanner,
                Geolocation,
                GoogleMaps,
                CallNumber,
                Facebook,
                { provide: ErrorHandler, useClass: IonicErrorHandler, }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map