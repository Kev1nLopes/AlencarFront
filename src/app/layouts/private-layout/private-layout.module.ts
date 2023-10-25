import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateLayoutComponent } from './private-layout.component';
import { RouterModule } from '@angular/router';
import { PrivateLayoutRoutes } from './private-layout.routes';



@NgModule({
  declarations: [
    PrivateLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PrivateLayoutRoutes)
  ]
})
export class PrivateLayoutModule { }
