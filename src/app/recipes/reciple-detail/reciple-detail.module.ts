import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipleDetailPageRoutingModule } from './reciple-detail-routing.module';

import { RecipleDetailPage } from './reciple-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipleDetailPageRoutingModule
  ],
  declarations: [RecipleDetailPage]
})
export class RecipleDetailPageModule {}
