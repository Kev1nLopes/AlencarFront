import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RequestsRoutes } from './requests.routes';
import { RequestsComponent } from './requests.component';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    RequestsComponent
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
    RouterModule.forChild(RequestsRoutes)
  ]
})
export class RequestsModule { }
