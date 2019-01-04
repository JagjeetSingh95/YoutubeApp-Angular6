import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { appConfig } from 'appConfig';
import { VideoClass } from '../models/video.class';

@Component({
  selector   : 'app-player',
  templateUrl: './player.component.html',
  styleUrls  : [ './player.component.scss' ]
})
export class PlayerComponent implements OnInit {
  public embedUrl: any;
  public videoLoader: boolean;
  @ViewChild('iframe') iframe:any;

  public videos: VideoClass[];

  constructor(private sanitizer: DomSanitizer, private router: Router) {
  }

  public ngOnInit() {
    const id = window.location.href
                     .replace(/^.*\//g, '')
                     .replace(/^.*\..*/g, '');

    if (!id.length) {
      return;
    }

    this.videoLoader = true;
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(appConfig.getYoutubeEmbdedUrl(id));
   
    const getVideos = JSON.parse(localStorage.getItem('videoIds'));
    const videos = getVideos.split(',');
    const videoId =  videos.find(element => element === id)
    if(videoId != id){
      this.router.navigate(['/youtube']);
    }
  }
  
  ngAfterViewInit () {
    this.iframe.nativeElement.addEventListener('load', this.onLoad.bind(this));
  }

  onLoad(e) {
    this.videoLoader = false;
  }

}
