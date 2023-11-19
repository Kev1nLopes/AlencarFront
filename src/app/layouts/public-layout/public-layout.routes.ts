import { Routes } from "@angular/router";
import { PublicLayoutComponent } from "./public-layout.component";
import { ClientsModule } from '../../pages/clients/clients.module';


export const PublicLayoutRoutes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../../pages/home/home.module').then(x => x.HomeModule)
            },
            {
                path: 'clientes',
                loadChildren: () => import('../../pages/clients/clients.module').then(x => x.ClientsModule)
            },
            {
                path: 'produtos',
                loadChildren: () => import('../../pages/products/products.module').then(x => x.ProductsModule)
            },
            {
                path: 'pedidos',
                loadChildren: () => import('../../pages/requests/requests.module').then(x => x.RequestsModule)
            },
            {
                path: 'veiculos',
                loadChildren: () => import('../../pages/vehicle/vehicle.module').then(x => x.VehicleModule)
            },
            {
                path: 'transportadoras',
                loadChildren: () => import('../../pages/shipping-company/shipping-company.module').then(x => x.ShippingCompanyModule)
            },

        ]
    }
]
