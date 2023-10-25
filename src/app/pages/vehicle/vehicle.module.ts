import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { RouterModule } from '@angular/router';
import { VehicleRoutes } from './vehicle.routes';



@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(VehicleRoutes)
  ]
})
export class VehicleModule { }
