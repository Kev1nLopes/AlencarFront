import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { ClientRoutes } from './clients.routes';



@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ClientRoutes)
  ]
})
export class ClientsModule { }
