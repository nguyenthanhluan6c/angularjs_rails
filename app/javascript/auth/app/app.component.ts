import { Component } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../environments/environment";
import templateHtml from './app.component.html'
import './app.component.scss'

@Component({
  selector: 'app-root',
  template: templateHtml,
  styles: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private authToken: Angular2TokenService){
    this.authToken.init(environment.token_auth_config);
  }
}
