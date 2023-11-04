import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Playlist } from '@app/interfaces/playlist/playlist';

@Component({
  selector: 'app-playlist-search-table',
  templateUrl: './playlist-search-table.component.html',
  styleUrls: ['./playlist-search-table.component.less'],
})
export class PlaylistSearchTableComponent implements OnInit {
  @Input() playlists: Playlist[] = [];
  @Input() totalItems = 100;

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<Playlist>(this.playlists);

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Playlist>(this.playlists);
  }
}
