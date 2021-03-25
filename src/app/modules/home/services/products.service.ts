import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ICategories } from '../../../core/interfaces/icategories';
import { Observable } from 'rxjs';
import { IProducts } from '../../../core/interfaces/iproducts';

@Injectable()
export class ProductsService {
  private path = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getCategories(size = '30'): Observable<ICategories> {
    return this.http.get<ICategories>(`${this.path}v1/categories`, {
      params: {
        'page[size]': size,
      },
    });
  }

  getProducts(page = '1', filter = ''): Observable<IProducts> {
    return this.http.get<IProducts>(`${this.path}v1/products`, {
      params: {
        'page[number]': page,
        'page[size]': '28',
        include: 'category,master,image_attachment.blob',
        'filter[category_slug_in]': [filter],
      },
    });
  }
}
