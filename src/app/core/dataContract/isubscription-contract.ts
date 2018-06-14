import { IUserState } from './iuser-state';

export interface ISubscriptionContract {
  channel: string;
  username: string;
  method: any;
  message: string;
  userstate: IUserState;
  type: string;
}
