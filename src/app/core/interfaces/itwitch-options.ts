export interface ITwitchOptions {
  options: {
    debug: boolean;
  };
  connection: {
    reconnect: boolean;
    secure: boolean;
  };
  identity?: {
    username: string;
    password: string;
  };
  channels: string[];
}
