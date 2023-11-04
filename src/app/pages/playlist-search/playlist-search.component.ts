import { Component, OnInit } from '@angular/core';
import { PaginatedResponse } from '@app/interfaces/pagination/paginated-response';
import { Playlist } from '@app/interfaces/playlist/playlist';

@Component({
  selector: 'app-playlist-search',
  templateUrl: './playlist-search.component.html',
  styleUrls: ['./playlist-search.component.less'],
})
export class PlaylistSearchComponent implements OnInit {
  playlists: Playlist[] = [];
  totalPlaylists = 0;

  ngOnInit() {
    this.loadPlaylists();
  }

  loadPlaylists() {
    const response: PaginatedResponse<Playlist> = {
      href: '',
      limit: 0,
      next: '',
      offset: 0,
      previous: '',
      total: 7,
      items: [
        {
          id: '3cEYpjA9oz9GiPac4AsH4n',
          name: 'This is Duke Ellington',
        },
        {
          id: '3cEYpjA9oz9GiPac4AsH4n',
          name: 'This is Count Basie',
        },
        {
          id: '3cEYpjA9oz9GiPac4AsH4n',
          name: 'This is Benny Goodman',
        },
        {
          id: '3cEYpjA9oz9GiPac4AsH4n',
          name: 'This is Artie Shaw',
        },
        {
          id: '3cEYpjA9oz9GiPac4AsH4n',
          name: 'This is Jimmie Lunceford',
        },
        {
          id: '3cEYpjA9oz9GiPac4AsH4n',
          name: 'This is Cab Calloway',
        },
        {
          id: '3cEYpjA9oz9GiPac4AsH4n',
          name: 'This is Glenn Miller',
        },
      ],
    };
    this.playlists = response.items;
    this.totalPlaylists = response.total;
  }
}
