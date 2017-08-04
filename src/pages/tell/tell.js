var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the TellPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TellPage = (function () {
    function TellPage(alerCtrl, navCtrl, navParams, callNumber) {
        this.alerCtrl = alerCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.phoneNumber = {
            item1: {
                tell: '191',
                name: 'เหตุด่วนเหุตร้าย'
            }
        };
    }
    TellPage.prototype.CallPhone = function (number) {
        console.log(number);
    };
    TellPage = __decorate([
        Component({
            selector: 'page-tell',
            templateUrl: 'tell.html',
        }),
        __metadata("design:paramtypes", [AlertController, NavController, NavParams, CallNumber])
    ], TellPage);
    return TellPage;
}());
export { TellPage };
//# sourceMappingURL=tell.js.map