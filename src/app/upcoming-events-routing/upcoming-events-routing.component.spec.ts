import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventsRoutingComponent } from './upcoming-events-routing.component';

describe('UpcomingEventsRoutingComponent', () => {
  let component: UpcomingEventsRoutingComponent;
  let fixture: ComponentFixture<UpcomingEventsRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventsRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
