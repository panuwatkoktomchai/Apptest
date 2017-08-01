import { Component } from '@angular/core';
import { AlertController } from "ionic-angular";

/**
 * Generated class for the ShowalertComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'showalert',
  templateUrl: 'showalert.html'
})
export class ShowalertComponent {

  text: string;

  constructor(public alerCtrl:AlertController){}

  showalert(txt_title,txt_message) {
    let confirm = this.alerCtrl.create({
      title: txt_title,
      message: txt_message,
      buttons: [
        {
          text: 'บันทึก',
          handler: () => {
          //go where
        }
        },
        {
          text: 'ยกเลิก',
          handler: () => {
           //go where
          }
        }
      ]
    });
    
    confirm.present()
    
  }

}
