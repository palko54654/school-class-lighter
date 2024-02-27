import { Component } from '@angular/core';
import { WifiService } from '../components/wifi.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab5.page.html'
})
export class Tab5Page {
  rooms = [
    {
      main: "TELOCVNIČŇA",
      key: "TEL"
    },
    {
      main: "JEDÁLEŇ",
      key: "JED"
    },
  ];


  constructor(private wifiService: WifiService) {}

  toggleSubs(key: string) {
    this.wifiService.sendMessage(key);
  }

}
