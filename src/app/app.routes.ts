import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'youtube', pathMatch: 'full'},
  {path: 'youtube', loadChildren: 'src/app/modules/youtube/youtube.module#YoutubeModule'},
  {path: '**', redirectTo: 'youtube'}
];
