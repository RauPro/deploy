import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProducts } from '../../../../core/interfaces/iproducts';
import { IDataProducts } from '../../../../core/interfaces/idata-products';
import { StorageService } from '../../../../core/services/storage.service';
import { ActivatedRoute } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { AppState } from '../../../../store/states/app.state';
import { Increase } from '../../../../store/actions/cart.actions';

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.scss'],
})
export class ProductsMenuComponent implements OnInit {
  pages!: number[];
  defaultURL = 'https://m.media-amazon.com/images/I/91VStQrvnAL._SL1500_.jpg';
  products!: IDataProducts[];
  cartList: IDataProducts[] = this.storage.getCartList()
    ? this.storage.getCartList()
    : [];
  constructor(
    private productsServices: ProductsService,
    private storage: StorageService,
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.productsServices
        .getProducts('1', params.get('id')?.toString())
        .subscribe((data: IProducts) => {
          this.products = data.data;
          this.pages = new Array(data.meta.last_page);
        });
    });
  }

  newPage(numberPage: number): void {
    this.productsServices
      .getProducts(numberPage.toString())
      .subscribe((data: IProducts) => {
        this.products = data.data;
      });
  }

  addToCart(product: IDataProducts): void {
    this.store.dispatch(Increase());
    product.counted = 1;
    this.cartList.push(product);
    this.storage.saveProducts(this.cartList);
  }
}
