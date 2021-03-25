import { IUser } from './iuser';

export interface IToken {
  token: string;
  user: IUser;
}
