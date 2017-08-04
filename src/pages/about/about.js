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
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this.homePage = HomePage;
        this.data = {
            Name: '',
            Pass: '',
            Age: ''
        };
        this.Name = navParams.get('editname');
        this.Pass = navParams.get('editpass');
        this.Age = navParams.get('editage');
    }
    AboutPage.prototype.saveform = function (form) {
        this.navCtrl.push(HomePage, {
            username: this.data.Name,
            password: this.data.Pass,
            age: this.data.Age
        });
    };
    AboutPage.prototype.doConfirm = function () {
        var confirm = this.alerCtrl.create({
            title: 'ยืนยันการบันทึก',
            message: 'แน่ใจว่าถูกต้องแล้ว และต้องการบันทึก',
            buttons: [
                {
                    text: 'บันทึก',
                    handler: function () {
                        console.log('กดบันทึก');
                    }
                },
                {
                    text: 'ยกเลิก',
                    handler: function () {
                        console.log('กดยกเลิก');
                    }
                }
            ]
        });
        confirm.present();
    };
    AboutPage = __decorate([
        Component({
            selector: 'page-about',
            templateUrl: 'about.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map