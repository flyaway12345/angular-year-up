import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniRouterComponent } from './alumni-router.component';

describe('AlumniRouterComponent', () => {
  let component: AlumniRouterComponent;
  let fixture: ComponentFixture<AlumniRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
