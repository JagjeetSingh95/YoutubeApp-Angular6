import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/internal/operators';

import { appConfig } from 'appConfig';
import { VideoClass } from '../models/video.class';

@Injectable()
export class YoutubeService {

  constructor(private http: HttpClient) {}

  public getTrendingVideos(videosPerPage?: number): Observable<VideoClass[]> {
    let videosPerPageNumber = JSON.parse(localStorage.getItem('filteredResult'));
    const params: any = {
      part           : appConfig.partsToLoad,
      chart          : appConfig.chart,
      videoCategoryId: appConfig.defaultCategoryId,
      regionCode     : appConfig.defaultRegion,
      maxResults     : videosPerPageNumber ? videosPerPageNumber : appConfig.maxVideosToLoad,
      key            : appConfig.youtubeApiKey,
    };
    return this.http.get<any>(appConfig.getYoutubeEndPoint('videos'), {params})
        .pipe(
          map(data => {
            let videos = data.items.map((item) => new VideoClass(item)).filter((item) => item.id !== '')
            localStorage.setItem('pageToken', data.nextPageToken)
            return videos;
          }),
          catchError(this.handleError('getTrendingVideos'))
        ) as Observable<VideoClass[]>;
  }

  public getVideos(params, callback) {
    return this.http.get<any>(appConfig.getYoutubeEndPoint('videos'), {params})
                  .pipe(
                    map(data => {
                      localStorage.setItem('pageToken', data.nextPageToken);
                      callback();
                      let videos = data.items.map((item) => new VideoClass(item)).filter((item) => item.id !== '')
                      return videos;
                    }),
                    catchError(this.handleError('getTrendingVideos'))
                  ) as Observable<VideoClass[]>;
  }

  private handleError(operation: string = 'operation') {
    return (error: any) => {
      error.operation = operation;
      return throwError(error);
    };
  }
}
