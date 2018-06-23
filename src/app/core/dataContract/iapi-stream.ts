import { IApiChannel } from './iapi-channel';

export interface IApiStream {
  stream: IApiStreamData;
}

interface IApiStreamData {
    average_fps: number;
    channel: IApiChannel;
    created_at: string;
    delay: number;
    game: string;
    is_playlist: boolean;
    preview: {};
    stream_type: string;
    video_height: number;
    viewers: number;
    _id: number;
}
