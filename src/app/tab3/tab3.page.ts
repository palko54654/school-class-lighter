import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  rooms = [
    {
      main: "TEI0",
    },
    {
      main: "TEI1",
    },
    {
      main: "TEI2",
    },
    {
      main: "TEI3",
    },
    {
      main: "TEI4",
    },
    {
      main: "TEI5",
    },
    {
      main: "TEI6",
    }
  ];


  constructor() {}

}
