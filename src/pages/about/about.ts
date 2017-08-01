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

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  homePage = HomePage
  data = {
    Name: '',
    Pass: '',
    Age: ''
  };
  Name:string
  Pass:string
  Age:string
  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController,) {
    this.Name = navParams.get('editname');
    this.Pass = navParams.get('editpass');
    this.Age = navParams.get('editage');
  }

  saveform(form){
    this.navCtrl.push(HomePage,{
      username:this.data.Name,
      password:this.data.Pass,
      age:this.data.Age
    })
  }
  
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'ยืนยันการบันทึก',
      message: 'แน่ใจว่าถูกต้องแล้ว และต้องการบันทึก',
      buttons: [
        {
          text: 'บันทึก',
          handler: () => {
            console.log('กดบันทึก');
          }
        },
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('กดยกเลิก');
          }
        }
      ]
    });
    
    confirm.present()
  }
  
}
