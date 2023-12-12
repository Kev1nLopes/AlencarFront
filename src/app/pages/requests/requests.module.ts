import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RequestsRoutes } from './requests.routes';
import { RequestsComponent } from './requests.component';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { RequestsFormDialogComponent } from './components/requests-form-dialog/requests-form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChangeStatusRequestDialogComponent } from './components/change-status-request-dialog/change-status-request-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    RequestsComponent,
    RequestsFormDialogComponent,
    ChangeStatusRequestDialogComponent

  ],
  imports: [
    CommonModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    MatDialogModule,
    RouterModule.forChild(RequestsRoutes),
    MatInputModule,
    FormsModule
  ]
})
export class RequestsModule { }
