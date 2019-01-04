/* Core */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Material UI */
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule, MatSliderModule
} from '@angular/material';

/* Application routes */
import { ROUTES } from './app.routes';

/* Components/Services/Pipes */
import { AppComponent } from './app.component';
import { ContextService } from '@shared/context.service';
import { HeaderComponent } from '@shared/header/header.component';
import { SlideFiltersComponent } from '@shared/slide-filters/slide-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideFiltersComponent
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatSliderModule,
    RouterModule.forRoot(ROUTES, {
      useHash           : Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers   : [ ContextService ],
  bootstrap   : [ AppComponent ]
})

export class AppModule {
}
