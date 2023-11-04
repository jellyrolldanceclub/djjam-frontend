import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlaylistSearchFilterModule } from '@app/components/playlist/playlist-search-filter/playlist-search-filter.module';
import { PlaylistSearchTableModule } from '@app/components/playlist/playlist-search-table/playlist-search-table.module';
import { PlaylistSearchRoutingModule } from './playlist-search-routing.module';
import { PlaylistSearchComponent } from './playlist-search.component';

@NgModule({
  declarations: [PlaylistSearchComponent],
  imports: [
    CommonModule,
    PlaylistSearchRoutingModule,
    PlaylistSearchTableModule,
    PlaylistSearchFilterModule,
  ],
})
export class PlaylistSearchModule {}
