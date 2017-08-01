import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from "ionic-angular";
/**
 * Generated class for the CameraComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'camera',
  templateUrl: 'camera.html'
})
export class CameraScannerBarcode{
  
  constructor(private barcodeScanner: BarcodeScanner,public alerCtrl: AlertController,private qrScanner: QRScanner) { }
  
  scanData :{}
  encodeData : string ;
  encodedData  : {};
   scanBC(){
     this.barcodeScanner.scan().then((encodedData) => {
     this.scanData = encodedData;
     this.doConfirm(encodedData.text)
     console.log()
    }, (err) => {
      console.log(err)
  });
   }


   scanQR(){
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       this.doConfirm('เปิดกล้องแล้ว')
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

       // show camera preview
       this.qrScanner.show();

       // wait for user to scan something, then the observable callback will be called

     } else if (status.denied) {
       this.doConfirm('กล้องไม่อนุญาติ')
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       this.doConfirm('ลองอีกครั้ง')
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => this.doConfirm(e));
   }


   doConfirm(txt) {
    let confirm = this.alerCtrl.create({
      title: 'ยืนยันการบันทึก',
      message: txt,
      buttons: [
        {
          text: 'บันทึก',
          handler: () => {
            //console.log('กดบันทึก');
          }
        },
        {
          text: 'ยกเลิก',
          handler: () => {
            //console.log('กดยกเลิก');
          }
        }
      ]
    });
    
    confirm.present()
  }

}

