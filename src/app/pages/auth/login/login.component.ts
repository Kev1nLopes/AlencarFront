import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importe o Router
import { AuthService } from 'src/app/services/auth.service';
import { User } from './types';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;
  public loading = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {  // Injete o Router
    this.form = this.initForm();
  }

  public async handleLogin() {
    this.loading = true;

    this.auth.login(this.form.getRawValue()).subscribe({
      next: (data: any) => {
        const user: User = data as User;
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        sessionStorage.setItem('token', JSON.stringify(user.token));
        this.router.navigate(['/home/clientes']);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  private initForm() {
    return this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }
}
