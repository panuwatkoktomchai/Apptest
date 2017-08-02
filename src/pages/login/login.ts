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
  Back = NotiryPage
  status :String
  user :String
  pass :String
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
  check(form){
    if (this.todo.User == "sos" && this.todo.Password == "sos") {
       this.user = this.todo.User
       this.pass = this.todo.Password
      status = "login success"
      ///////////////////////////////////////////// alert start
        let confirm = this.alerCtrl.create({
        title: 'Message!',
        message: status,
        buttons: [
          {
            text: 'ok',
            handler: () => {
            this.checkvalue(this.user,this.pass)
          }
          },
          {
            text: 'cancle',
            handler: () => {
            }
          }
        ]
        });
      
        confirm.present()
      //////////////////////////////////////////// alert end

    }else{
      console.log('login failed')
    }
  }
}
