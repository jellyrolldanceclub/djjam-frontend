import { PaginatedResponse } from '@app/interfaces/pagination/paginated-response';
import { PlaylistOwner } from '@app/interfaces/playlist/playlist-owner';
import { Track } from '@app/interfaces/track/track';

export interface PlaylistDetail {
  id: string;
  href: string;
  name: string;
  tracks: PaginatedResponse<Track>;
  owner: PlaylistOwner;
}
