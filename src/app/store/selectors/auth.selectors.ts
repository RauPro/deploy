import { createSelector } from '@ngrx/store';
export const isloggedIn = createSelector(
  (state: any) => state.auth,
  (auth) => auth?.user !== undefined
);
export const isloggedOut = createSelector(isloggedIn, (loggedIn) => !loggedIn);
