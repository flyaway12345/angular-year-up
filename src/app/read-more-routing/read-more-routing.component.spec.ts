import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreRoutingComponent } from './read-more-routing.component';

describe('ReadMoreRoutingComponent', () => {
  let component: ReadMoreRoutingComponent;
  let fixture: ComponentFixture<ReadMoreRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMoreRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
