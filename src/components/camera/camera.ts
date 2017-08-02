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
}

