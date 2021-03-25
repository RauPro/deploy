import { LogIn, LogOut } from '../actions/auth.action';

import { createReducer, on } from '@ngrx/store';
import { IPayload } from '../../modules/interfaces/ipayload';
import { AuthState } from '../../modules/interfaces/auth-state';

export const initialState: AuthState = {
  user: undefined,
};
const authReducer = createReducer(
  initialState,
  on(LogIn, (state: AuthState, action: IPayload) => {
    return {
      user: action,
    };
  }),
  on(LogOut, (state: AuthState) => {
    return {
      user: undefined,
    };
  })
);
export default authReducer;
