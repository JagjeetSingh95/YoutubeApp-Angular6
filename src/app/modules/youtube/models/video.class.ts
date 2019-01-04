import * as moment from 'moment';

let videoIds = [];
export class VideoClass {
  public id = '';
  public title = '';
  public thumbnail = '';
  public publishedAt = '';
  public viewCount = 0;
  public likeCount = 0;

  constructor(data: any = {}) {
    if (!data || !data[ 'snippet' ] || !data[ 'statistics' ]) {
      return;
    }

    this.id = data[ 'id' ];
    this.title = data[ 'snippet' ][ 'title' ];
    this.thumbnail = data[ 'snippet' ][ 'thumbnails' ][ 'high' ][ 'url' ];
    this.publishedAt = moment(data[ 'snippet' ][ 'publishedAt' ])
      .fromNow();

    const viewCount = parseInt(data[ 'statistics' ][ 'viewCount' ], 10);
    const likeCount = parseInt(data[ 'statistics' ][ 'likeCount' ], 10);
    this.viewCount = isNaN(viewCount) ? 0 : viewCount;
    this.likeCount = isNaN(likeCount) ? 0 : likeCount;
    videoIds.push(this.id);
    localStorage.setItem('videoIds', JSON.stringify(videoIds.join()));
  }
}