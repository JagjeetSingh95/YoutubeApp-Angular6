import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

/* Application routes */
import { ROUTES } from './youtube.routes';

/* Material UI */
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule
} from '@angular/material';

/* Components/Services/Pipes */
import { YoutubeComponent } from '@modules/youtube/youtube.component';
import { VideoComponent } from '@modules/youtube/components/video.component';
import { YoutubeService } from '@modules/youtube/service/youtube.service';
import { PlayerComponent } from '@modules/youtube/player/player.component';

@NgModule({
  declarations: [
    YoutubeComponent,
    VideoComponent,
    PlayerComponent
  ],
  imports     : [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MomentModule,
    RouterModule.forChild(ROUTES)
  ],
  providers   : [ YoutubeService ],
  exports     : [ RouterModule ]
})

export class YoutubeModule {
}
