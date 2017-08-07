import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { NgIf } from '@angular/common';
import { NewsPage } from "../news/news";
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
  locat={
    latit: 0,
    longit: 0
  }
  SOSinfo = {
    title:'',
    des:''
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
     let strJSON = [{
      "MemberID":"1",
      "Name":"Weerachai",
      "Tel":"0819876107"
      },
      {
      "MemberID":"2",
      "Name":"Win",
      "Tel":"021978032"
      },
      {
      "MemberID":"3",
      "Name":"Eak",
      "Tel":"087654321"
      }]

    }

    Ulocation(){
    
      this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude)
      console.log(resp.coords.longitude)
      this.locat.latit = resp.coords.latitude
      this.locat.longit = resp.coords.longitude
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
