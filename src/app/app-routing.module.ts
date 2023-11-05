import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/playlist-search/playlist-search.module').then(
        (m) => m.PlaylistSearchModule,
      ),
  },
  {
    path: 'playlists/:id',
    loadChildren: () =>
      import('./pages/playlist-detail/playlist-detail.module').then(
        (m) => m.PlaylistDetailModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
