import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { ProductsComponent } from './pages/products/products.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { ShippingCompanyComponent } from './pages/shipping-company/shipping-company.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }