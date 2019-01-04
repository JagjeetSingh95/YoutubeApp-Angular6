import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import { ContextService } from '../context.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let context: ContextService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
             declarations: [ HeaderComponent ],
             providers   : [ ContextService ],
             imports     : [
               RouterTestingModule,
               MatIconModule
             ]
           })
           .compileComponents();
    context = TestBed.get(ContextService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
