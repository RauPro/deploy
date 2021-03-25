import { createFeatureSelector } from '@ngrx/store';

import * as auth from '../reducers/auth.reducers';

export interface AppState {
  countCart: number;
}
export const selectAuthState = createFeatureSelector<AppState>('auth');

export const reducers = {};
