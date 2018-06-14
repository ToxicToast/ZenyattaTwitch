import { IUserState } from "./iuser-state";

export interface ISubgiftContract {
  channel: string;
  username: string;
  recipient: string;
  method: any;
  userstate: IUserState;
  type: string;
}
