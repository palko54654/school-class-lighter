import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WifiService } from "../components/wifi.service";

@Component({
    selector: 'app-tab6',
    templateUrl: 'tab6.page.html',
    styleUrls: ['tab6.page.scss']
})
export class Tab6Page implements OnInit {
    rooms = [
        {
            main: 200,
            subs: [203,205,207,209],
            key: "200"
        },
        {
            main: 300,
            subs: [303,305,307,309],
            key: "300"
            
        },
        {
            main: 400,
            subs: [403, 405, 407, 409],
            key: "400"
        },
        {
            main: 500,
            subs: [503, 505, 507, 509],
            key: "500"
        },
        {
            main: 600,
            subs: [605],
            key: "600"
        },
        {
            main: 700,
            subs: [708, 710, 716],
            key: "700"
        },
        {
            main: 800,
            subs: [810],
            key: "800"
        },
        {
            main: 900,
            subs: [905,909],
            key: "900"
        },
        {
            main: 1000,
            subs: [1009, 1010],
            key: "1000"
        },
        {
            main: "Dielne",
            key: "D"
        },
        {
            main: "Zborovňa",
            key: "ZBR"
        }
        
    ];

    visibleSubs: any = {};
    selectedSub: number | null = null; // Add this line

  constructor(private router: Router, private wifiService: WifiService) {}

  ngOnInit(): void {
    this.rooms.forEach(room => {
      this.visibleSubs[room.main] = false;
    });
  }

  toggleSubs(room: any) {
    this.visibleSubs[room.main] = !this.visibleSubs[room.main];
    this.wifiService.sendData(this.wifiService.deviceId, room.key);
  }

  selectSub(sub: number) {
    let subString = sub.toString();

    // Check if the string starts with 2, 3, or 4
    if (subString.startsWith('2') || subString.startsWith('3') || subString.startsWith('4')) {
      // Replace the first character with '5'
      subString = '5' + subString.substring(1);
    }
  
    // Convert the modified string back to a number and update selectedSub
    this.selectedSub = parseInt(subString, 10);
  }
}