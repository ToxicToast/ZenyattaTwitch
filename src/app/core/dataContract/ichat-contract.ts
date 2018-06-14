import { IUserState } from './iuser-state';

export interface IChatContract {
  channel: string;
  userstate: IUserState;
  message: string;
  self: boolean;
  type: string;
}
