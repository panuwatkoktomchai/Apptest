import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';//รับค่าที่ส่งมา 1
import { Storage } from '@ionic/storage';

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
   Newinfo:any = [
   ]
  
constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {

   }
ionViewDidLoad(){
  this.storage.forEach((value,key,index) => {
    console.log("thi is" + value["Title"])
    console.log("this is "+value['Des'])
     this.Newinfo.push({
       title  : value.Title,
       des    : value.Des,
       photo1 : value.Photo1,
       photo2 : value.Photo2,
       photo3 : value.Photo3,
       photo4 : value.Photo4
     })
    
   })
}
 getNews(){
  
 }
}
