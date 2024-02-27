import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WifiService } from "../components/wifi.service";
import { BluetoothLe } from "@capacitor-community/bluetooth-le";
import { delay } from "rxjs";

@Component({
    template: `
     <ion-header>
            <ion-toolbar>
                <ion-title>Zadajte IP Adresu</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>         
            <ion-button expand="block" (click)="scanAndConnect()">Pripojiť na bluetooth</ion-button>
        </ion-content>
    `,
    styles: [``],
})
export class IpAddressComponent implements OnInit {
    ipAddress: string = '';

    constructor(private router: Router, private wifiService: WifiService) {}

    ngOnInit() {
        this.wifiService.initialize().then(() => {
          console.log('BLE Initialized');
        });
      }
    
      scanAndConnect() {
        this.wifiService.scanAndConnect();
        setTimeout(() => {
        this.router.navigate(['/tabs/tab1']); // Navigate to the tabs route after a delay
    }, 5000); // Delay in milliseconds (10000ms = 10 seconds)
      }

}