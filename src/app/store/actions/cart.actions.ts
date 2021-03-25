import { createAction } from '@ngrx/store';

export enum CountActionTypes {
  INCREASE = '[Count] Increase',
  DECREASE = '[Count] Decrease',
  RESET = '[Count] Reset',
}
export const Increase = createAction(CountActionTypes.INCREASE);
export const Decrease = createAction(CountActionTypes.DECREASE);
export const Reset = createAction(CountActionTypes.RESET);
