import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYearupOffersComponent } from './what-yearup-offers.component';

describe('WhatYearupOffersComponent', () => {
  let component: WhatYearupOffersComponent;
  let fixture: ComponentFixture<WhatYearupOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatYearupOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatYearupOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
