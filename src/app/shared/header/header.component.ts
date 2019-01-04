import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import { Router, NavigationStart } from '@angular/router';

import { ContextService } from '../context.service';

@Component({
  selector   : 'app-page-header',
  templateUrl: './header.component.html',
  styleUrls  : [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  @Output() filterSlideOpen = new EventEmitter();
  public filtersBtn: boolean = false;
  public title$: Subject<string> = this.appContext.moduleTitle;

  constructor(private appContext: ContextService, private router: Router) {
  }

  ngOnInit () {
    this.router.events
              .filter(event => event instanceof NavigationStart)
              .subscribe((event:NavigationStart) => {
                if(event.url === '/' || event.url === '/youtube') {
                  this.filtersBtn = true;
                } else {
                  this.filtersBtn = false;
                }
              });
  }

  filterSlide() {
    this.filterSlideOpen.emit();
  }
}
