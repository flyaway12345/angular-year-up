import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewsRoutingComponent } from './all-news-routing.component';

describe('AllNewsRoutingComponent', () => {
  let component: AllNewsRoutingComponent;
  let fixture: ComponentFixture<AllNewsRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllNewsRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNewsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
