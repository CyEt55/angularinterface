import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() aptList: Object;
  @Output() deleteEvent = new EventEmitter();

  handleDelete(theApt: Object){
    this.deleteEvent.emit(theApt);
  }
}
