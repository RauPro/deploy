import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCarComponent } from './pages/shopping-car/shopping-car.component';
import { ShoppingCarRoutingModule } from './shopping-car-routing-module';
import { HomeModule } from '../home/home.module';
import { ProductsContainerComponent } from './components/products-container/products-container.component';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ShoppingCarComponent,
    ProductsContainerComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCarRoutingModule,
    HomeModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
})
export class CarModule {}
