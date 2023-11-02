import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistSearchComponent } from './playlist-search.component';

const routes: Routes = [{ path: '', component: PlaylistSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistSearchRoutingModule {}
