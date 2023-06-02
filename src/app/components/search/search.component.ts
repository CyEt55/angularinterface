import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Output() queryEvt = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  handleQuery(query: string){
    this.queryEvt.emit(query);
  }
}
