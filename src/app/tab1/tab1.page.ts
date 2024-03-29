import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WifiService } from '../components/wifi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    rooms = [
    {
      main: 1000,
      subs: [1004, 1005, 1006, 1007, 1008, 1015]
    },
    {
      main: 900,
      subs: [904, 906, 907, 908, 910]
    },
    {
      main: 800,
      subs: [804,805,806,807,808,809,8015]
    },
    {
      main:700,
      subs: [704,705,706,707,709]
    },
    {
      main: 600,
      subs: [606,607]
    }
  ];

  // Object to keep track of which main button's subs are visible
  visibleSubs: any = {};
  ipAddress: string = '';
  selectedSub: number | null = null; // Add this line

  constructor(private router: Router, private wifiService: WifiService) {}

  ngOnInit(): void {
    this.rooms.forEach(room => {
      this.visibleSubs[room.main] = false;
    });
  }

  toggleSubs(main: number) {
    this.visibleSubs[main] = !this.visibleSubs[main];
    const mainString = main.toString();
    this.wifiService.sendData(this.wifiService.deviceId, mainString);
  }

  selectSub(sub: number) {
    this.selectedSub = sub;
  }
}
