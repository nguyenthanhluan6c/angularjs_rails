import { Component, OnInit } from '@angular/core';
import templateHtml from './home.component.html'

@Component({
  selector: 'app-home',
  template: templateHtml,
  styles: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
