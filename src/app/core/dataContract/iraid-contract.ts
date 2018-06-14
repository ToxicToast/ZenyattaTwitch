import { IUserState } from './iuser-state';

export interface IRaidContract {
  channel: string;
  raider: string;
  viewers: number;
  userstate: IUserState;
  type: string;
}
