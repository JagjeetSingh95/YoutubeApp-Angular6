import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule, MatIconModule, MatInputModule, MatSidenavModule,
  MatSliderModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SlideFiltersComponent } from '@shared/slide-filters/slide-filters.component';
import { ContextService } from '@shared/context.service';

@Component({
  selector: 'app-page-header',
  template: ''
})
class HeaderComponent {
  @Input() public filterSlideOpen: any;
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
             declarations: [
               AppComponent,
               HeaderComponent,
               SlideFiltersComponent
             ],
             providers   : [ ContextService ],
             imports     : [
               BrowserAnimationsModule,
               FormsModule,
               ReactiveFormsModule,
               RouterTestingModule,
               BrowserAnimationsModule,
               MatAutocompleteModule,
               MatButtonModule,
               MatIconModule,
               MatInputModule,
               MatSidenavModule,
               MatSliderModule
             ]
           })
           .compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app)
      .toBeTruthy();
  }));
});
