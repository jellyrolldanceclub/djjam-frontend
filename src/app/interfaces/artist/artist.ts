import { Image } from '@app/interfaces/image/image';

export interface Artist {
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
}
