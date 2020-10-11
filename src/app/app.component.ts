import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-stencil';
  date: Date = new Date();
  checkbox: boolean = true;
  inputValue: string = 'hello there';

  toggle: boolean = false;

  get dateType() {
    return typeof this.date;
  }

  valueChange(e: Event) {
    console.log('app component', e);
    // this.date = e.target['value'];
  }

  openModal() {
    this.toggle = true;
    console.log(this.toggle);
  }

  closeModal() {
    this.toggle = false;
  }
}
