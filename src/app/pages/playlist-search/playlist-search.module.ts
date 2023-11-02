import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlaylistSearchRoutingModule } from './playlist-search-routing.module';
import { PlaylistSearchComponent } from './playlist-search.component';

@NgModule({
  declarations: [PlaylistSearchComponent],
  imports: [CommonModule, PlaylistSearchRoutingModule],
})
export class PlaylistSearchModule {}
