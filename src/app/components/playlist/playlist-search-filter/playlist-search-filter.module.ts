import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlaylistSearchFilterComponent } from './playlist-search-filter.component';

@NgModule({
  declarations: [PlaylistSearchFilterComponent],
  exports: [PlaylistSearchFilterComponent],
  imports: [CommonModule],
})
export class PlaylistSearchFilterModule {}
