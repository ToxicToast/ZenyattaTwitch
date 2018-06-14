import { IUserState } from './iuser-state';

export interface IResubContract {
  channel: string;
  username: string;
  months: number;
  message: string;
  userstate: IUserState;
  methods: any;
  type: string;
}
