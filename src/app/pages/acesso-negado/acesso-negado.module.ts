import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AcessoNegadoComponent } from './acesso-negado.component';
import { AcessoNegadoRoutes } from './acesso-negado.routes';

@NgModule({
  declarations: [
    AcessoNegadoComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    ButtonModule,
    DialogModule,
    RouterModule.forChild(AcessoNegadoRoutes)
  ]
})
export class AcessoNegadoModule { }
