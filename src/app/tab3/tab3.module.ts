import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { AgmCoreModule } from '@agm/core';
import {MatInputModule,MatIconModule,MatButtonModule} from '@angular/material';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA50lL8jt2R_R_8A-zamt9HNv6jZFwGj60',
      libraries: ['places']
    }),
    MatInputModule,MatIconModule,MatButtonModule,NgxSpinnerModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
