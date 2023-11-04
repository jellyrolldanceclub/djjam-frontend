import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSearchTableComponent } from './playlist-search-table.component';

describe('PlaylistSearchTableComponent', () => {
  let component: PlaylistSearchTableComponent;
  let fixture: ComponentFixture<PlaylistSearchTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistSearchTableComponent],
    });
    fixture = TestBed.createComponent(PlaylistSearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
