import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraScannerBarcode } from "../../components/camera/camera";
import { AboutPage } from "../about/about";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

 
export class HomePage {

   SCbarcode=CameraScannerBarcode
   Name:string
   Pass:string
   Age:string
  
  constructor(public navCtrl: NavController ,private navParams: NavParams) {
    this.Name = navParams.get('username');
    this.Pass = navParams.get('password');
    this.Age = navParams.get('age');
  }
  aboutPage(txt){
    console.log(txt)
    this.navCtrl.push(AboutPage,{
      editname: this.Name,
      editpass: this.Pass,
      editage: this.Age
    })
  }
  
}

