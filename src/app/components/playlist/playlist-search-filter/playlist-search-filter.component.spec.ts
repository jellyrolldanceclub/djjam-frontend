import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSearchFilterComponent } from './playlist-search-filter.component';

describe('PlaylistSearchFilterComponent', () => {
  let component: PlaylistSearchFilterComponent;
  let fixture: ComponentFixture<PlaylistSearchFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistSearchFilterComponent],
    });
    fixture = TestBed.createComponent(PlaylistSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
