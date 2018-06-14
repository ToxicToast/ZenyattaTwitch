import { IUserState } from './iuser-state';

export interface ICheerContract {
  channel: string;
  userstate: IUserState;
  message: string;
  type: string;
}
