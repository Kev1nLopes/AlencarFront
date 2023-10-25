import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RequestsRoutes } from './requests.routes';
import { RequestsComponent } from './requests.component';



@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RequestsRoutes)
  ]
})
export class RequestsModule { }
