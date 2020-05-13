import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WCAPageComponent } from './wcapage.component';

describe('WCAPageComponent', () => {
  let component: WCAPageComponent;
  let fixture: ComponentFixture<WCAPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WCAPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WCAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
