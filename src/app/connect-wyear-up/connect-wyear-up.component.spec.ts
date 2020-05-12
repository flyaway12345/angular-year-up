import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWYearUpComponent } from './connect-wyear-up.component';

describe('ConnectWYearUpComponent', () => {
  let component: ConnectWYearUpComponent;
  let fixture: ComponentFixture<ConnectWYearUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectWYearUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectWYearUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
