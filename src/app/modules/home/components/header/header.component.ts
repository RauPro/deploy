import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  isloggedIn,
  isloggedOut,
} from '../../../../store/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { ProductsService } from '../../services/products.service';
import { ICategories } from '../../../../core/interfaces/icategories';
import { IDataCategories } from '../../../../core/interfaces/idata-categories';
import { StorageService } from '../../../../core/services/storage.service';
import { AppState } from '../../../../store/states/app.state';
import { LogOut } from '../../../../store/actions/auth.action';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;
  toggleProfile = false;
  tokenStatus = false;
  car = this.store.select('countCart');
  categories: IDataCategories[] = [];
  cardCount: number | Observable<number> = this.storage.getCartList()
    ? this.storage.getCartList().length
    : this.store.select('countCart');
  constructor(
    private store: Store<AppState>,
    private authServices: AuthService,
    private productsService: ProductsService,
    private storage: StorageService
  ) {}
  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isloggedIn));
    this.isLoggedOut$ = this.store.pipe(select(isloggedOut));
    this.tokenStatus = this.authServices.isLogged();
    this.productsService.getCategories().subscribe((data: ICategories) => {
      this.categories.push(...data.data);
    });
  }

  changeToggleStatus(): void {
    this.toggleProfile = !this.toggleProfile;
  }

  logout(): void {
    this.store.dispatch(LogOut());
    this.authServices.logout();
  }
}
