import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAwardsRoutingComponent } from './our-awards-routing.component';

describe('OurAwardsRoutingComponent', () => {
  let component: OurAwardsRoutingComponent;
  let fixture: ComponentFixture<OurAwardsRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurAwardsRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAwardsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
