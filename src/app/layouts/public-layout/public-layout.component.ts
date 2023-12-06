import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isUserAdmin } from 'src/app/utils/getAuthorities';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {

  constructor(private router: Router) { }

  public isAdmin: boolean = isUserAdmin();

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
