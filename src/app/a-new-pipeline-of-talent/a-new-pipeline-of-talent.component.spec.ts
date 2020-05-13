import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ANewPipelineOfTalentComponent } from './a-new-pipeline-of-talent.component';

describe('ANewPipelineOfTalentComponent', () => {
  let component: ANewPipelineOfTalentComponent;
  let fixture: ComponentFixture<ANewPipelineOfTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ANewPipelineOfTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ANewPipelineOfTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
