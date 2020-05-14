import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBar1RoutingComponent } from './nav-bar1-routing.component';

describe('NavBar1RoutingComponent', () => {
  let component: NavBar1RoutingComponent;
  let fixture: ComponentFixture<NavBar1RoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBar1RoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBar1RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
