import { Component } from '@angular/core';
import { WifiService } from '../components/wifi.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  rooms = [
    {
      main: 500,
      subs: [502, 504, 506, 508, 519]
    },
    {
      main: 400,
      subs: [402, 406, 408, 419]
    },
    {
      main: 300,
      subs: [302,304,306,308,319]
    },
    {
      main: 200,
      subs: [202,204,206,208,219]
    }
  ];

  // Object to keep track of which main button's subs are visible
  visibleSubs: any = {};
  selectedSub: number | null = null; // Add this line

  constructor(private wifiService: WifiService) {}

  ngOnInit(): void {
    this.rooms.forEach(room => {
      this.visibleSubs[room.main] = false;
    });
  }

  toggleSubs(main: number) {
    this.visibleSubs[main] = !this.visibleSubs[main];
    const mainString = main.toString();
    this.wifiService.sendMessage(mainString);
  }

  selectSub(sub: number) {
    let subString = sub.toString();

    // Check if the string has at least one character to avoid errors
    if (subString.length > 0) {
      // Replace the first character with '5'
      subString = '5' + subString.substring(1);
    }
    // Convert the modified string back to a number
    this.selectedSub = parseInt(subString, 10);
  }

}
