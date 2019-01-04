import { Component, Input } from '@angular/core';
import { VideoClass } from '@modules/youtube/models/video.class';

@Component({
  selector   : 'app-video-component',
  templateUrl: './video.component.html',
  styleUrls  : [ './video.component.scss' ]
})

export class VideoComponent {
  @Input() public video: VideoClass;
}
