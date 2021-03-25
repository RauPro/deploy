import { Action } from '@ngrx/store';
import { CountActionTypes } from '../actions/cart.actions';
const cartState = localStorage.getItem('shoppingCart')
  ? JSON.parse(localStorage.getItem('shoppingCart') as string)?.length
  : 0;
export function countReducer(state = cartState, action: Action): number {
  switch (action.type) {
    case CountActionTypes.INCREASE:
      return state + 1;
    case CountActionTypes.DECREASE:
      return state - 1;
    case CountActionTypes.RESET:
      return (state = 0);
    default:
      return state;
  }
}
