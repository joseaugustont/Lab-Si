import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritsDetailComponent } from './favorits-detail.component';

describe('FavoritsDetailComponent', () => {
  let component: FavoritsDetailComponent;
  let fixture: ComponentFixture<FavoritsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
