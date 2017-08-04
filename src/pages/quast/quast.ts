import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the QuastPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quast',
  templateUrl: 'quast.html',
})
export class QuastPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuastPage');
  }

  Pam = {
   topic:"", 
   detail:""
 }
  save() {
    let alert = this.alertCtrl.create({
      title: 'ยืนยันข้อมูล',
      subTitle: "หัวข้อ :" + this.Pam.topic + "<br/>"+"รายละเอียด :" + this.Pam.detail,
      buttons: ['ตกลง']
    });
    alert.present();
  }

}
