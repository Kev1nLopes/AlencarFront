import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RequestsRoutes } from './requests.routes';
import { RequestsComponent } from './requests.component';
import { RequestsFormDialogComponent } from './components/requests-form-dialog/requests-form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChangeStatusRequestDialogComponent } from './components/change-status-request-dialog/change-status-request-dialog.component';



@NgModule({
  declarations: [
    RequestsComponent,
    RequestsFormDialogComponent,
    ChangeStatusRequestDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RequestsRoutes),
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class RequestsModule { }
