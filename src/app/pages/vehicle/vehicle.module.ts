import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { RouterModule } from '@angular/router';
import { VehicleRoutes } from './vehicle.routes';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
    ToggleButtonModule,
    ButtonModule,
    DialogModule,
    RouterModule.forChild(VehicleRoutes)
  ]
})
export class VehicleModule { }
