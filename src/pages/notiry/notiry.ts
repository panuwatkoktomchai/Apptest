import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CausePage } from "../cause/cause";
import { TellPage } from "../tell/tell";
import { CallNumber } from "@ionic-native/call-number";
import { ShowalertComponent } from "../../components/showalert/showalert";
import { LoginPage } from "../login/login";
import { NewsPage } from "../news/news";

/**
 * Generated class for the NotiryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-notiry',
  templateUrl: 'notiry.html',
})
export class NotiryPage {
  goCause = CausePage
  goTell = TellPage
  Cause = CausePage
  tell = TellPage
  News = NewsPage
  Quast = LoginPage
  Name:String
   Pass:String
   Age:string
   phoneNumber: Number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private call:CallNumber,private alerCtrl:AlertController) {
    this.Name = navParams.get('username');
    this.Pass = navParams.get('password');
    this.Age = navParams.get('age');
  }

  async callNumber():Promise<any>{
    try{
      this.call.callNumber(String(this.phoneNumber),true)
      .then(() => this.Showalert(this.phoneNumber+'เบอร์นี้','lauching dialer'))
      .catch(() => this.Showalert(this.phoneNumber+'เบอร์นี้','error lauching dialer'));
      console.log(String(this.phoneNumber))
    }
    catch(e){
      this.Showalert('error',e)
    }
  }
  Showalert(txt_title,txt_message) {
    let confirm = this.alerCtrl.create({
      title: txt_title,
      message: txt_message,
      buttons: [
        {
          text: 'บันทึก',
          handler: () => {
          //go where
        }
        },
        {
          text: 'ยกเลิก',
          handler: () => {
           //go where
          }
        }
      ]
    });
    
    confirm.present()
    
  }

  gopage(txt){
    if (txt =="01") {
      console.log(txt)
      CausePage
    }else if(txt =="02"){

    }
  }

}
