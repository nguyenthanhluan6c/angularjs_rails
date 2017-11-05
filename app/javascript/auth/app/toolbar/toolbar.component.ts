import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import templateHtml from './toolbar.component.html'

@Component({
  selector: 'app-toolbar',
  template: templateHtml,
  styles: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;


  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit(){}

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  presentAuthDialog(mode?: 'login'| 'register'){
    this.authDialog.openDialog(mode);

  }

}