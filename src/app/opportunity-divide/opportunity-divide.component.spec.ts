import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityDivideComponent } from './opportunity-divide.component';

describe('OpportunityDivideComponent', () => {
  let component: OpportunityDivideComponent;
  let fixture: ComponentFixture<OpportunityDivideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityDivideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityDivideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
