import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCommentComponent } from './star-comment.component';

describe('StarCommentComponent', () => {
  let component: StarCommentComponent;
  let fixture: ComponentFixture<StarCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
