import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurApproachRouterComponent } from './our-approach-router.component';

describe('OurApproachRouterComponent', () => {
  let component: OurApproachRouterComponent;
  let fixture: ComponentFixture<OurApproachRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurApproachRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurApproachRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
