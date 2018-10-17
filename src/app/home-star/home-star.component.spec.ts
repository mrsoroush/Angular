import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStarComponent } from './home-star.component';

describe('HomeStarComponent', () => {
  let component: HomeStarComponent;
  let fixture: ComponentFixture<HomeStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
