import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductsMenuComponent } from './components/products-menu/products-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { countReducer } from '../../store/reducers/cart.reducers';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, ProductsMenuComponent],
  exports: [HeaderComponent],
  providers: [ProductsService],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    StoreModule.forFeature('countCart', countReducer),
  ],
})
export class HomeModule {}
