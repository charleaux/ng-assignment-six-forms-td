import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  application = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;
  defaultSubscription = 'advanced';

  onSubmit() {
    this.application.email = this.signupForm.value.email;
    this.application.subscription = this.signupForm.value.subscription;
    this.application.password = this.signupForm.value.password;
    this.submitted = true;
    this.signupForm.reset({ subscription: this.defaultSubscription });
  }
  resetSubmisson() {
    this.submitted = false;
    this.application = {
      email: '',
      subscription: '',
      password: ''
    };
  }
}
