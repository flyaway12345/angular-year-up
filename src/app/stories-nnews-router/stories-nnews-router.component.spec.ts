import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesNNewsRouterComponent } from './stories-nnews-router.component';

describe('StoriesNNewsRouterComponent', () => {
  let component: StoriesNNewsRouterComponent;
  let fixture: ComponentFixture<StoriesNNewsRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesNNewsRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesNNewsRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
