import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Camera, CameraOptions } from "@ionic-native/camera";
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
  constructor(private camera: Camera,private geolocation: Geolocation,public alertCtrl: AlertController) {
  }
  urlImg :String
  insert(id){// start open camera
    console.log(id)

    // console

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit:true
    }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.urlImg = base64Image;

    }, (err) => {
    // Handle error
      console.log(err)
    });
  }// end camera
  Ulocat={
    lati:'',
    logi:''
  }
  Ulocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
     this.lati = this.resp.coords.latitude
     console.log(this.lati)
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
      subTitle: txt1+':'+txt2,
      buttons: ['OK']
    });
    alert.present();
    }
}
