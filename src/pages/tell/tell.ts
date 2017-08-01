import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the TellPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tell',
  templateUrl: 'tell.html',
})
export class TellPage {

  constructor(public alerCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TellPage');
  }
  phone(num){
    this.callNumber.callNumber('0990435915', true)
  .then(() => this.logForm('lauching dialer'))
  .catch(() => this.logForm('error lauching dialer'));
  }
logForm(form) {
    let confirm = this.alerCtrl.create({
      title: 'ผลการยืนยัน',
      message: form,
      buttons: [
        {
          text: 'ตกลง',
          handler: () => {
          
        }
        },
        {
          text: 'ยกเลิก',
          handler: () => {
           console.log('cancel')
          }
        }
      ]
    });
    
    confirm.present()
    
  }

}
