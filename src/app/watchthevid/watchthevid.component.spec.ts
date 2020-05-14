import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchthevidComponent } from './watchthevid.component';

describe('WatchthevidComponent', () => {
  let component: WatchthevidComponent;
  let fixture: ComponentFixture<WatchthevidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchthevidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchthevidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
