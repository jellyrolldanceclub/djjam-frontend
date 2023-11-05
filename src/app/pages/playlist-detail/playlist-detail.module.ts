import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlaylistDetailRoutingModule } from './playlist-detail-routing.module';
import { PlaylistDetailComponent } from './playlist-detail.component';

@NgModule({
  declarations: [PlaylistDetailComponent],
  imports: [CommonModule, PlaylistDetailRoutingModule],
})
export class PlaylistDetailModule {}
