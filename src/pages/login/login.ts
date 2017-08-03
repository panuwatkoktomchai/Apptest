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
  auth: any;
  constructor(public alerCtrl: AlertController, public navCtrl: NavController) { 
    
  }
  login() {
       
    }

  
}
