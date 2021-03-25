import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCarComponent } from './pages/shopping-car/shopping-car.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCarRoutingModule {}
