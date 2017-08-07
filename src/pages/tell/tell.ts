import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var window;
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
<<<<<<< HEAD
  
  constructor(public navCtrl: NavController) {
  }
   callIT(passedNumber){
    //You can add some logic here
    passedNumber = encodeURIComponent(passedNumber);
     window.location = "tel:"+passedNumber;
    }
=======
  phoneNumber = {
    item1: {
      tell:'191',
      name:'เหตุด่วนเหุตร้าย'
    }
  } 
  constructor(public alerCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber,public alertCtrl: AlertController) {
  }
  CallPhone(numbert){
    this.callNumber.callNumber(numbert, true)
  .then(() => console.log('Launched dialer!'))
  .catch((Error) => this.ShowAlert(Error));
  }

  ShowAlert(txt1){
      let alert = this.alertCtrl.create({
        title: '!',
        subTitle: txt1,
        buttons: ['ok']
      });
      alert.present();
      }
>>>>>>> 347298f08e9d942d24b0a8e9903657e57dffd3cb
}
