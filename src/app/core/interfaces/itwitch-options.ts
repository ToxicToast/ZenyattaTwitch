export interface ITwitchOptions {
  options: {
    debug: boolean;
    clientId: string;
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
