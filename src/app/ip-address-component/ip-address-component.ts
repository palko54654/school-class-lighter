import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { WifiService } from "../components/wifi.service";

@Component({
    template: `
     <ion-header>
            <ion-toolbar>
                <ion-title>Zadajte IP Adresu</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-item>
                <ion-label position="floating">IP Adresa</ion-label>
                <ion-input [(ngModel)]="ipAddress" type="text" placeholder="Zdajte ip adresu zariadenia"></ion-input>
            </ion-item>
            <ion-button expand="block" (click)="proceed()">Pokračovať</ion-button>
        </ion-content>
    `,
    styles: [``],
})
export class IpAddressComponent {
    ipAddress: string = '';

    constructor(private router: Router, private wifiService: WifiService) {}

    proceed() {
        this.wifiService.setIpAddress(this.ipAddress);
        this.router.navigate(['/tabs/tab1']); // Navigate to the tabs route
    }
}