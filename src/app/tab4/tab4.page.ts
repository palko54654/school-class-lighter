import { Component } from '@angular/core';
import { WifiService } from '../components/wifi.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html'
})
export class Tab4Page {
  rooms = [
   "D13",
   "D12",
   "D11",
    "D124",
     "D10",
     "D7",
     "D6",
    "D26",
     "D5",
     "D4",
     "D2",
     "D1",
  ];


  constructor(private wifiService: WifiService) {}

  toggleSubs(main: string) {
    this.wifiService.sendData(this.wifiService.deviceId, main);
  }
}
