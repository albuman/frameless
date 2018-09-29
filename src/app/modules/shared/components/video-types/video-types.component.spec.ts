import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTypesComponent } from './video-types.component';

describe('VideoTypesComponent', () => {
  let component: VideoTypesComponent;
  let fixture: ComponentFixture<VideoTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
