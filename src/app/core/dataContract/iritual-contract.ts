import { IUserState } from './iuser-state';

export interface IRitualContract {
  channel: string;
  username: string;
  chattertype: string;
  userstate: IUserState;
  type: string;
}
