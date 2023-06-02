import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  form: FormGroup;
  showForm: Boolean = true;

  @Output() addEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      petName: this.formBuilder.control(''),
      ownerName: this.formBuilder.control(''),
      aptDate: this.formBuilder.control(''),
      aptTime: this.formBuilder.control(''),
      aptNotes: this.formBuilder.control('')
    });
  }

  toggleAptDisplay() {
    this.showForm = !this.showForm;
  }

  onSubmit(appointment){
    this.addEvent.emit(appointment);
    this.showForm = !this.showForm;
  }
}
