import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';//รับค่าที่ส่งมา 1

/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
   SOSinfo = {
    title:'',   // 2 [(ngModel)]="SOSinfo.title
    des:'',     //  [(ngModel)]="SOSinfo.des"
    at: '',
    GImg1:''
  
   }
constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.SOSinfo.title = this.navParams.get('title');
    this.SOSinfo.des = this.navParams.get('des');  // 3
    this.SOSinfo.at = this.navParams.get('at');
    this.SOSinfo.GImg1 = this.navParams.get('GImg1');
   
 
  
   }
 


}
