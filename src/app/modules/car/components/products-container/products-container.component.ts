import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../core/services/storage.service';
import { IDataProducts } from '../../../../core/interfaces/idata-products';
import { select, Store } from '@ngrx/store';
import { isloggedIn } from '../../../../store/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AuthService } from '../../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Reset } from '../../../../store/actions/cart.actions';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit {
  totalCost = 0;
  private isLoggedIn$!: Observable<boolean>;
  constructor(
    private storage: StorageService,
    private store: Store,
    public dialog: MatDialog,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  displayedColumns: string[] = [
    'img',
    'name',
    'category',
    'price',
    'amount',
    'action',
  ];
  dataSource = this.storage.getCartList();
  dataCar: IDataProducts[] = [];
  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isloggedIn));
    for (let i = 0; i < this.dataSource?.length; i++) {
      this.totalCost += Number(this.dataSource[i].master.price);
      if (i === 0) {
        this.dataCar.push(this.dataSource[0]);
      } else {
        if (this.findElement(this.dataSource[i].id)) {
          this.dataCar.push(this.dataSource[i]);
        } else {
          const stateProduct = this.dataCar.findIndex(
            (product) => product.id === this.dataSource[i].id
          );
          this.dataCar[stateProduct].counted++;
        }
      }
    }
  }
  findElement(id: number): boolean {
    const stateProduct = this.dataCar.findIndex((product) => product.id === id);
    return stateProduct === -1;
  }

  addNewProduct(element: IDataProducts): void {
    const stateProduct = this.dataCar.findIndex(
      (product) => product.id === element.id
    );
    this.dataCar[stateProduct].counted++;
    this.totalCost += Number(element.master.price);
  }
  removeNewProduct(element: IDataProducts): void {
    const stateProduct = this.dataCar.findIndex(
      (product) => product.id === element.id
    );
    if (this.dataCar[stateProduct].counted > 1) {
      this.dataCar[stateProduct].counted--;
      this.totalCost -= Number(element.master.price);
    }
  }

  checkout(): void {
      if (this.authService.isLogged()) {
        this.purchase();
        this.dataCar = [];
        this.store.dispatch(Reset());
        this.storage.deleteProducts();
      } else {
        this.snackBar.open(
          'You will be redirected to the login to proceed to buy',
          'Get it',
          {
            duration: 2000,
          }
        );
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 3000);
      }
  }
  purchase(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
