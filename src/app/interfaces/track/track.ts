import { Artist } from '@app/interfaces/artist/artist';

export interface Track {
  id: string;
  href: string;
  duration_ms: number;
  name: string;
  artists: Artist[];
}
