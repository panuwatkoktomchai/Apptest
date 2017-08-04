import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  
  constructor(public navCtrl: NavController) {
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

