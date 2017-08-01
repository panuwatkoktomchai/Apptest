import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import {NotiryPage} from "../notiry/notiry";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@Component({
   selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  constructor(public alerCtrl:AlertController,public navCtrl: NavController){}
  
  todo = {
    User: '',
    Password: ''
  };
  checkvalue(user,pass){
    this.navCtrl.push(NotiryPage, {
      username: user,
      password: pass
    });
  }
  logForm(form) {
    let user = this.todo.User
    let pass = this.todo.Password
    let confirm = this.alerCtrl.create({
      title: 'ยืนยันตัวตน',
      message: user,
      buttons: [
        {
          text: 'บันทึก',
          handler: () => {
          this.checkvalue(user,pass)
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
