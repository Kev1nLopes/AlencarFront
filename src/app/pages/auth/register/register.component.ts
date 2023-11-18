import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public form: FormGroup;
  public loading = false;

  
  constructor(private fb: FormBuilder) {
    this.form = this.initForm();
  }

  initForm(): FormGroup{
    return this.fb.group({
      username: [''],
      password: ['']
    });
  }

  handleFormSubmit(){

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000)
    console.log("kevin");
  }




}
