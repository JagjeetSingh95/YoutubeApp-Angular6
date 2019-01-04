import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material';

import { VideoComponent } from '@modules/youtube/components/video.component';
import { VideoClass } from '@modules/youtube/models/video.class';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
             declarations: [ VideoComponent ],
             imports     : [
               RouterTestingModule,
               MatIconModule
             ]
           })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    component.video = new VideoClass({
      id        : 123,
      snippet   : {
        title      : 'Test',
        thumbnails : {
          high: {
            url: 'http://test.com'
          }
        },
        publishedAt: new Date()
      },
      statistics: {
        viewCount: 561,
        l1keCount: 546
      }
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
