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
   template: `
   <ion-content padding>
    <form #form="ngForm" (ngSubmit)="logForm(form)" novalidate>
      <ion-item>
        <ion-label>User</ion-label>
        <ion-input type="text" required="true" [(ngModel)]="todo.User" name = "User" ngControl="User"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Password</ion-label>
        <ion-textarea type="password" [(ngModel)]="todo.Password" name = "Password" ngControl="Password"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" block>ok</button>
    </form>
    </ion-content>
  `,
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
