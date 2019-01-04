import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { throwError } from 'rxjs/index';

import { YoutubeService } from './service/youtube.service';
import { ContextService } from '@shared/context.service';
import { VideoClass } from './models/video.class';
import { appConfig } from 'appConfig';

@Component({
  selector   : 'app-youtube-component',
  templateUrl: './youtube.component.html',
  styleUrls  : [ './youtube.component.scss' ]
})

export class YoutubeComponent implements OnInit {
  public trendingVideos = [];
  public loadingError$ = new Subject<boolean>();
  public videos: VideoClass[];

  constructor(private youtubeService: YoutubeService,
              private appContext: ContextService, private http: HttpClient) {
  }

  public ngOnInit(): void {
    this.appContext.moduleTitle.next('YOUTUBE');
    const count = localStorage.getItem('filteredResult');
    this.fetchVideos(count);
    this.appContext.videosCountPerPage.subscribe((count) => {
      this.fetchVideos(count);
    });
  }

  fetchVideos(count) {
    if(count > 50) {
      localStorage.removeItem('pageToken')
      this.trendingVideos = [];
      this.getVideosRecursively(count);
    }
    else {
      this.trendingVideos = [];
      this.loadVideos(count)
    }
  }

  private loadVideos(videosPerPage?: number) {
    this.trendingVideos = [this.youtubeService.getTrendingVideos(videosPerPage)
                              .pipe(
                                catchError((error: any) => {
                                  this.loadingError$.next(true);
                                  return throwError(error);
                                })
                              )];
  }

  private handleError(operation: string = 'operation') {
    return (error: any) => {
      error.operation = operation;
      return throwError(error);
    };
  }

  private getVideosRecursively(total, count=48) {
    if(count == 0) {
      localStorage.removeItem('pageToken')
      return ;
    }
    else {
      let params: any = {
        part           : appConfig.partsToLoad,
        chart          : appConfig.chart,
        videoCategoryId: appConfig.defaultCategoryId,
        regionCode     : appConfig.defaultRegion,
        maxResults     : count ? count : appConfig.maxVideosToLoad,
        key            : appConfig.youtubeApiKey,
      };
      const pageToken = localStorage.getItem('pageToken');
      if(pageToken) {
        params = {...params, pageToken};
      }
      const remaining = total - count;
      if(remaining > 48){
        this.trendingVideos.push(this.youtubeService.getVideos(params, () => this.getVideosRecursively(remaining)));
      }
      else {
        this.trendingVideos.push(this.youtubeService.getVideos(params, () => this.getVideosRecursively(remaining, remaining)));
      }
    }
  }
}
