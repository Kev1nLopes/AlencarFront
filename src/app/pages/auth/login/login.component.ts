import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.initForm();
  }



  public handleLogin(){

    console.log(this.form.getRawValue());
  }


  private initForm(){
    return this.fb.group({
      UserName: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(100)]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]]
    })
  }

}
