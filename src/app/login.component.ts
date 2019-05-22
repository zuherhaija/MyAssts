import { Component, NgModule } from '@angular/core';
import {FormsModule, NgForm , FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsernameValidators } from './usernameValidators';






@Component({
  selector: 'app-login-form',
  templateUrl: 'login.component.html',
  styleUrls: ['./forms.css']
})



export class LoginFormComponent {

form = new FormBuilder().group({
     UserName: ['',
      Validators.compose([Validators.required,        UsernameValidators.cannotContainSpace]),
        UsernameValidators.shouldBeUnique ],
     password: []
});


  submitted = false;

  onSubmit() {
    console.log(this.form);
    this.submitted = true;
  }

  log(x) {
    console.log(x, this.form.controls.username, this.form.controls.password);
  }
}
