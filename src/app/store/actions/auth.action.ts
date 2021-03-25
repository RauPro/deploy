import { Action, createAction, props } from '@ngrx/store';
import { ILogin } from '../../core/interfaces/ilogin';
export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT = '[Auth] Logout',
  GET_STATUS = '[Auth] GetStatus',
}

export const LogIn = createAction(
  AuthActionTypes.LOGIN,
  props<{ payload: ILogin }>()
);
export const LogInSuccess = createAction(AuthActionTypes.LOGIN_SUCCESS);
export const LogInFailure = createAction(AuthActionTypes.LOGIN_FAILURE);
export const LogOut = createAction(AuthActionTypes.LOGOUT);

export class GetStatus implements Action {
  readonly type = AuthActionTypes.GET_STATUS;
}
