import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab6Page } from './tab6.page';

import { Tab5PageRoutingModule } from './tab6-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab5PageRoutingModule
  ],
  declarations: [Tab6Page]
})
export class Tab6PageModule {}
