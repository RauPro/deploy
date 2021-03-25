import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ValidateTokenGuard } from '../../core/guards/validate-token.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [ValidateTokenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
