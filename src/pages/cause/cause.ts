import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { NgIf } from '@angular/common';
import { NewsPage } from "../news/news";  // 1. หน้าที่จะส่งข้อมูลไปแสดง

/**
 * Generated class for the CausePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cause',
  templateUrl: 'cause.html',
})
export class CausePage {
  [x: string]: any;
 
  constructor(private camera: Camera,private geolocation: Geolocation,public alertCtrl: AlertController,public navCtrl: NavController) {
  }
  SOSinfo = {
    title:'',   // 2 [(ngModel)]="SOSinfo.title
    des:'',      //  [(ngModel)]="SOSinfo.des"
    at:'',
    GImg1: ''
    
  }
  gotToResult(){
    this.navCtrl.push(NewsPage,{    //3 ส่งข้อมูลที่กรอกมา ไปหน้าอื่น
      title: this.SOSinfo.title,
      des: this.SOSinfo.des,
      at: this.SOSinfo.at
    });
  }

  

  urlImg :String
  GImg1:any;
  GImg2:any;
  GImg3:any;
  GImg4:any;
  SUMimg={}
  
  TxtArray = [
    {name: 'panuwat', age:'22'},
    {name: 'sujitra', age:'21'}
  ];

  insert(id){// start open camera
    console.log(id)

    // console

    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL ,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit:true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
     if (id=='icon1') {
       this.GImg1 = this.base64Image;

     }else if (id =='icon2') {
       this.GImg2 = this.base64Image;
     }else if (id =='icon3') {
       this.GImg3 = this.base64Image;
     }else if (id =='icon4') {
       this.GImg4 = this.base64Image;
     }
     

    }, (err) => {
    // Handle error
      this.ShowAlert("",err)
    });
  }// end camera
   save(){
     this.navCtrl.push(NewsPage,{
       ArrayIMG:this.GImg1,
       GImg1: this.GImg1
     })
    }

    

    YourLocation(){
    
      this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      }).catch((error) => {
        console.log('Error getting location', error);
      });

      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
      
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      });
    }
  

  ShowAlert(txt1,txt2){
    let alert = this.alertCtrl.create({
      title: '!',
      subTitle: txt1+'--and--'+txt2,
      buttons: ['ok']
    });
    alert.present();
    }
}
