import { IMetaProducts } from './imeta-products';
import { IDataProducts } from './idata-products';

export interface IProducts {
  data: IDataProducts[];
  meta: IMetaProducts;
}
