import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUSRouterComponent } from './about-us-router.component';

describe('AboutUSRouterComponent', () => {
  let component: AboutUSRouterComponent;
  let fixture: ComponentFixture<AboutUSRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUSRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUSRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
