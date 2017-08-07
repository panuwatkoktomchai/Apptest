import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
=======
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the QuastPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
>>>>>>> c78a9a2514bb6fbb0c146445598566a58926564a

@Component({
  selector: 'page-quast',
  templateUrl: 'quast.html',
})
export class QuastPage {
<<<<<<< HEAD
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
  }
   presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'SentTO',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
=======
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuastPage');
>>>>>>> c78a9a2514bb6fbb0c146445598566a58926564a
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
