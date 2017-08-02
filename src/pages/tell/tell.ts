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
  phoneNumber = {
    item1: {
      tell:'191',
      name:'เหตุด่วนเหุตร้าย'
    }
  } 
  constructor(public alerCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber) {
  }
  CallPhone(number){
    console.log(number)
  }
}
