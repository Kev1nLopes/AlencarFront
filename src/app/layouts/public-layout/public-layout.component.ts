import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {

  constructor(private router: Router){}

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
