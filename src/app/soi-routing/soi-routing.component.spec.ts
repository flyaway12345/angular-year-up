import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoiRoutingComponent } from './soi-routing.component';

describe('SoiRoutingComponent', () => {
  let component: SoiRoutingComponent;
  let fixture: ComponentFixture<SoiRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoiRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoiRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
