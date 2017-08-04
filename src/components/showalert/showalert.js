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
import { AlertController } from "ionic-angular";
/**
 * Generated class for the ShowalertComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ShowalertComponent = (function () {
    function ShowalertComponent(alerCtrl) {
        this.alerCtrl = alerCtrl;
    }
    ShowalertComponent.prototype.ionViewDidLoad = function (txt_title, txt_message) {
        var confirm = this.alerCtrl.create({
            title: txt_title,
            message: txt_message,
            buttons: [
                {
                    text: 'บันทึก',
                    handler: function () {
                        //go where
                    }
                },
                {
                    text: 'ยกเลิก',
                    handler: function () {
                        //go where
                    }
                }
            ]
        });
        confirm.present();
    };
    ShowalertComponent = __decorate([
        Component({
            selector: 'showalert',
            templateUrl: 'showalert.html'
        }),
        __metadata("design:paramtypes", [AlertController])
    ], ShowalertComponent);
    return ShowalertComponent;
}());
export { ShowalertComponent };
//# sourceMappingURL=showalert.js.map