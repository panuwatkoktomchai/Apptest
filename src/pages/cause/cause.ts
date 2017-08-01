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

  constructor(private googleMaps: GoogleMaps,public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation,public alerCtrl: AlertController) {
  }
  
  
   maplati 
   maplongi 
  ionViewDidLoad() {
        
        this.geolocation.getCurrentPosition().then((resp) => {
          this.maplati = resp.coords.latitude
          this.maplongi = resp.coords.longitude
         console.log(resp.coords.latitude,resp.coords.longitude);
        //  this.Showalert(resp.coords.latitude,resp.coords.longitude)
        }).catch((error) => {
          console.log(error);
        });

        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude
});
  }


  // Load map only after view is initialized
ngAfterViewInit() {
  console.log('start')
 this.loadMap();
}

loadMap() {
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 console.log('start load map')
 let element: HTMLElement = document.getElementById('map');

 let map: GoogleMap = this.googleMaps.create(element);

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');
     // Now you can add elements to the map like the marker
   }
 );

 // create CameraPosition
 let position: CameraPosition = {
   target: {
     lat: this.maplati,
     lng: this.maplongi
   },
   zoom: 18,
   tilt: 30
 };

 // move the map's camera to position
 map.moveCamera(position);

 // create new marker
 let markerOptions: MarkerOptions = {
   position: this.target,
   title: 'Ionic'
 };

 map.addMarker(markerOptions)
   .then((marker: Marker) => {
      marker.showInfoWindow();
    });
 }

  Texttx(tx){
    this.Showalert(this.maplati, this.maplongi);
  }
  getLocation(masseg){
    
  }


  Showalert(txt1,txt2) {
    let confirm = this.alerCtrl.create({
      title: 'ตำแหน่งของคุณคือ',
      message: txt1,
      buttons: [
        {
          text: 'บันทึก',
          handler: () => {
          console.log(txt1,txt2)
        }
        },
        {
          text: 'ยกเลิก',
          handler: () => {
           console.log('cancel')
          }
        }
      ]
    });
    
    confirm.present()
    
  }

}
