import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatAutocompleteModule, MatIconModule, MatInputModule, MatSidenavModule,
  MatSliderModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlideFiltersComponent } from './slide-filters.component';
import { ContextService } from '../context.service';

describe('HeaderComponent', () => {
  let component: SlideFiltersComponent;
  let fixture: ComponentFixture<SlideFiltersComponent>;
  let context: ContextService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
             declarations: [ SlideFiltersComponent ],
             providers   : [ ContextService ],
             imports     : [
               BrowserAnimationsModule,
               FormsModule,
               ReactiveFormsModule,
               RouterTestingModule,
               MatAutocompleteModule,
               MatIconModule,
               MatInputModule,
               MatSidenavModule,
               MatSliderModule
             ]
           })
           .compileComponents();
    context = TestBed.get(ContextService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
