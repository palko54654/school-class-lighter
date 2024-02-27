import { Component } from '@angular/core';
import { WifiService } from '../components/wifi.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  rooms = [
     "TEI0",
    "TEI1",
    "TEI2",
     "TEI3",
     "TEI4",
     "TEI5",
    "TEI6",
  ];


  constructor(private wifiService: WifiService) {}

  toggleSubs(main: string) {
    this.wifiService.sendData(this.wifiService.deviceId, main);
  }

}
