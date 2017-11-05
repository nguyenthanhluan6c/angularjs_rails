import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import templateHtml from './register-form.component.html'

@Component({
  selector: 'app-register-form',
  template: templateHtml,
  styles: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private authService:AuthService) { }

  ngOnInit() {}


  onSignUpSubmit(){

    this.authService.registerUser(this.signUpUser).subscribe(

        (res) => {

          if (res.status == 200){
            this.onFormResult.emit({signedUp: true, res})
          }

        },

        (err) => {
          console.log(err.json())
          this.onFormResult.emit({signedUp: false, err})
        }
    )

  }
}