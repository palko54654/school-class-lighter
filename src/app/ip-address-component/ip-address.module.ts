import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IpAddressComponent } from './ip-address-component';
import { IpAddressRoutingModule } from './ip-address-routing-module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IpAddressRoutingModule,
    HttpClientModule
  ],
  declarations: [IpAddressComponent],
  providers: []
})
export class IpAddressModule {}
