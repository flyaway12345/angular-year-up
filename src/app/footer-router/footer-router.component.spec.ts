import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRouterComponent } from './footer-router.component';

describe('FooterRouterComponent', () => {
  let component: FooterRouterComponent;
  let fixture: ComponentFixture<FooterRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
