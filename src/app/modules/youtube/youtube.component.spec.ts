import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, EventEmitter, Input } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { YoutubeComponent } from './youtube.component';
import { YoutubeService } from './service/youtube.service';
import { ContextService } from '@shared/context.service';
import { Observable } from 'rxjs';
import 'rxjs-compat/add/observable/of';
import { VideoClass } from '@modules/youtube/models/video.class';

@Component({
  selector: 'app-video-component',
  template: ''
})
class VideoComponent {
  @Input() public video: VideoClass;
}

describe('YoutubeComponent', () => {
  let component: YoutubeComponent;
  let fixture: ComponentFixture<YoutubeComponent>;
  const service = {
    getTrendingVideos() {
      return Observable.of([]);
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
             declarations: [ YoutubeComponent, VideoComponent ],
             imports     : [
               RouterTestingModule,
               MatButtonModule,
               MatIconModule,
               MatSidenavModule,
               MomentModule
             ],
             providers   : [
               {provide: YoutubeService, useValue: service},
               ContextService
             ]
           })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
