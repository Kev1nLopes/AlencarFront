import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;
  public loading = false;

  constructor(private fb: FormBuilder, private auth: AuthService){
    this.form = this.initForm();
  }



  public async handleLogin(){

    this.loading = true;

    this.auth.login(this.form.getRawValue()).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err)
      }
    })

    setTimeout(()=>{
      this.loading = false;
    }, 3000)
    
  }


  


  private initForm(){
    return this.fb.group({
      UserName: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(100)]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]]
    })
  }


  

}
