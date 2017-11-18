import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistMusicComponent } from './playlist-music.component';

describe('PlaylistMusicComponent', () => {
  let component: PlaylistMusicComponent;
  let fixture: ComponentFixture<PlaylistMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
