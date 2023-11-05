import { Component, OnInit } from '@angular/core';
import { TrackAudioFeatures } from '@app/interfaces/audio-features/track-audio-features';
import { PlaylistDetail } from '@app/interfaces/playlist/playlist-detail';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.less'],
})
export class PlaylistDetailComponent implements OnInit {
  playlist!: PlaylistDetail;

  trackAudioFeatures: TrackAudioFeatures[] = [];

  ngOnInit() {
    this.getPlaylist();
    this.getAudioFeatures();
  }

  getPlaylist() {
    this.playlist = {
      href: 'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n',
      id: '3cEYpjA9oz9GiPac4AsH4n',
      name: 'This is Duke Ellington',
      owner: {
        href: 'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n',
        id: '3cEYpjA9oz9GiPac4AsH4n',
        type: 'user',
        uri: 'spotify:track:6rqhFgbbKwnb9MLmUQDhG6',
        display_name: 'Spotify',
      },
      tracks: {
        href: '',
        limit: 0,
        next: '',
        offset: 0,
        previous: '',
        total: 0,
        items: [
          {
            id: '3cEYpjA9oz9GiPac4AsH4n',
            href: '3cEYpjA9oz9GiPac4AsH4n',
            duration_ms: 320000,
            name: 'My Little Brown Book',
            artists: [
              {
                genres: ['jazz'],
                href: '3cEYpjA9oz9GiPac4AsH4n',
                id: '3cEYpjA9oz9GiPac4AsH4n',
                images: [],
                name: 'Duke Ellington',
                popularity: 97,
              },
            ],
          },
          {
            id: '3cEYpjA9oz9GiPac4AsH4n',
            href: '3cEYpjA9oz9GiPac4AsH4n',
            duration_ms: 289000,
            name: 'All I Need Is The Girl',
            artists: [
              {
                genres: ['jazz'],
                href: '3cEYpjA9oz9GiPac4AsH4n',
                id: '3cEYpjA9oz9GiPac4AsH4n',
                images: [],
                name: 'Duke Ellington',
                popularity: 97,
              },
            ],
          },
          {
            id: '3cEYpjA9oz9GiPac4AsH4n',
            href: '3cEYpjA9oz9GiPac4AsH4n',
            duration_ms: 184000,
            name: "Don't Get Around Much Anymore",
            artists: [
              {
                genres: ['jazz'],
                href: '3cEYpjA9oz9GiPac4AsH4n',
                id: '3cEYpjA9oz9GiPac4AsH4n',
                images: [],
                name: 'Duke Ellington',
                popularity: 97,
              },
            ],
          },
          {
            id: '3cEYpjA9oz9GiPac4AsH4n',
            href: '3cEYpjA9oz9GiPac4AsH4n',
            duration_ms: 156000,
            name: 'Haupe',
            artists: [
              {
                genres: ['jazz'],
                href: '3cEYpjA9oz9GiPac4AsH4n',
                id: '3cEYpjA9oz9GiPac4AsH4n',
                images: [],
                name: 'Duke Ellington',
                popularity: 97,
              },
            ],
          },
          {
            id: '3cEYpjA9oz9GiPac4AsH4n',
            href: '3cEYpjA9oz9GiPac4AsH4n',
            duration_ms: 246000,
            name: 'Isfahan',
            artists: [
              {
                genres: ['jazz'],
                href: '3cEYpjA9oz9GiPac4AsH4n',
                id: '3cEYpjA9oz9GiPac4AsH4n',
                images: [],
                name: 'Duke Ellington',
                popularity: 97,
              },
            ],
          },
        ],
      },
    };
  }

  getAudioFeatures() {
    this.trackAudioFeatures = this.playlist.tracks.items.map((track) => {
      return {
        acousticness: 0.00242,
        analysis_url: '',
        danceability: 0.585,
        duration_ms: 237040,
        energy: 0.842,
        id: track.id,
        instrumentalness: 0.00686,
        key: 9,
        liveness: 0.0866,
        loudness: -5.883,
        mode: 0,
        speechiness: 0.0556,
        tempo: 118.211,
        time_signature: 4,
        track_href: 'https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B',
        type: 'audio_features',
        uri: 'spotify:track:2takcwOaAZWiXQijPHIx7B',
        valence: 0.428,
      };
    });
  }
}
