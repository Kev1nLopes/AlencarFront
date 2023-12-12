import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { ProductsComponent } from './pages/products/products.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { ShippingCompanyComponent } from './pages/shipping-company/shipping-company.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { JwtAuthInterceptor } from './interceptor/jwt-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatButtonModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtAuthInterceptor, multi: true } //Multi significa que podemos ter multiplos objetos utilizando esse jwt
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
