import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PlaylistSearchTableComponent } from './playlist-search-table.component';

@NgModule({
  declarations: [PlaylistSearchTableComponent],
  exports: [PlaylistSearchTableComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
})
export class PlaylistSearchTableModule {}
