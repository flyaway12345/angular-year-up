import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSlidersComponent } from './image-sliders.component';

describe('ImageSlidersComponent', () => {
  let component: ImageSlidersComponent;
  let fixture: ComponentFixture<ImageSlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
