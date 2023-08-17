import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { ListproduitComponent } from '../listproduit/listproduit.component';
import { HomePageRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HomePageRoutingModule,
    MatCardModule,MatProgressSpinnerModule,MatIconModule
  ],
  declarations: [HomePage,ListproduitComponent  ]
})
export class HomePageModule {}
