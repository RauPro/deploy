import { IDataCategories } from './idata-categories';
import { IDataImg } from './idata-img';
import { IMasterProduct } from './imaster-product';

export interface IDataProducts {
  active: number;
  description: string;
  id: number;
  likes_count: number;
  likes_down_count: number;
  likes_up_count: number;
  name: string;
  published_at: string;
  slug: string;
  category: IDataCategories;
  image: IDataImg;
  master: IMasterProduct;
  counted: number;
}
