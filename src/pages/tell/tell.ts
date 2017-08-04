import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var window;
/**
 * Generated class for the TellPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tell',
  templateUrl: 'tell.html',
})
export class TellPage {
  
  constructor(public navCtrl: NavController) {
  }
   callIT(passedNumber){
    //You can add some logic here
    passedNumber = encodeURIComponent(passedNumber);
     window.location = "tel:"+passedNumber;
    }
}
