import { TestBed, async, inject } from '@angular/core/testing';
import { YoutubeService } from './youtube.service';
import { HttpClientModule } from '@angular/common/http';

describe('YoutubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ YoutubeService ],
      imports  : [ HttpClientModule ]
    });
  });

  it('should ...', inject([ YoutubeService ], (service: YoutubeService) => {
    expect(service)
      .toBeTruthy();
  }));
});
