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
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";
import { NewsPage } from "../news/news";
/**
 * Generated class for the CausePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CausePage = (function () {
    function CausePage(camera, geolocation, alertCtrl, navCtrl) {
        this.camera = camera;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.SOSinfo = {
            title: '',
            des: ''
        };
        this.SUMimg = {};
        this.TxtArray = [
            { name: 'panuwat', age: '22' },
            { name: 'sujitra', age: '21' }
        ];
    }
    CausePage.prototype.insert = function (id) {
        var _this = this;
        console.log(id);
        // console
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            if (id == 'icon1') {
                _this.GImg1 = _this.base64Image;
            }
            else if (id == 'icon2') {
                _this.GImg2 = _this.base64Image;
            }
            else if (id == 'icon3') {
                _this.GImg3 = _this.base64Image;
            }
            else if (id == 'icon4') {
                _this.GImg4 = _this.base64Image;
            }
        }, function (err) {
            // Handle error
            _this.ShowAlert("", err);
        });
    }; // end camera
    CausePage.prototype.save = function () {
        this.navCtrl.push(NewsPage, {
            ArrayIMG: this.GImg1
        });
    };
    CausePage.prototype.ShowAlert = function (txt1, txt2) {
        var alert = this.alertCtrl.create({
            title: '!',
            subTitle: txt1 + '--and--' + txt2,
            buttons: ['ok']
        });
        alert.present();
    };
    CausePage = __decorate([
        Component({
            selector: 'page-cause',
            templateUrl: 'cause.html',
        }),
        __metadata("design:paramtypes", [Camera, Geolocation, AlertController, NavController])
    ], CausePage);
    return CausePage;
}());
export { CausePage };
//# sourceMappingURL=cause.js.map