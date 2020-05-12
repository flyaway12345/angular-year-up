import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearupSolutionComponent } from './yearup-solution.component';

describe('YearupSolutionComponent', () => {
  let component: YearupSolutionComponent;
  let fixture: ComponentFixture<YearupSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearupSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearupSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
