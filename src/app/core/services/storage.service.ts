import { Injectable } from '@angular/core';
import { IDataProducts } from '../interfaces/idata-products';

@Injectable()
export class StorageService {
  constructor() {}
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  deleteToken(): void {
    localStorage.removeItem('token');
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  saveProducts(listCart: IDataProducts[]): void {
    localStorage.setItem('shoppingCart', JSON.stringify(listCart));
  }
  getCartList(): IDataProducts[] {
    return JSON.parse(localStorage.getItem('shoppingCart') as string);
  }

  deleteProducts(): void {
    localStorage.removeItem('shoppingCart');
  }
}
