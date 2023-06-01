import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  showForm: Boolean = true;

  constructor(
  ) {}

  ngOnInit() {}

  toggleAptDisplay(){
    this.showForm = !this.showForm;
  }
}
