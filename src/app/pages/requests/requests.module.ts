import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RequestsRoutes } from './requests.routes';
import { RequestsComponent } from './requests.component';
import { RequestsFormDialogComponent } from './components/requests-form-dialog/requests-form-dialog.component';



@NgModule({
  declarations: [
    RequestsComponent,
    RequestsFormDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RequestsRoutes),
  ]
})
export class RequestsModule { }
