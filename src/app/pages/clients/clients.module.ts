import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { ClientRoutes } from './clients.routes';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    ButtonModule,
    DialogModule,
    RouterModule.forChild(ClientRoutes)
  ]
})
export class ClientsModule { }
