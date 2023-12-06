// Importe o guarda de rota que você criou

import { Routes } from '@angular/router';
import { authGuard } from 'src/app/guards/auth.guard';
import { AcessoNegadoComponent } from 'src/app/pages/acesso-negado/acesso-negado.component';
import { PublicLayoutComponent } from './public-layout.component';

export const PublicLayoutRoutes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../../pages/home/home.module').then(x => x.HomeModule),
            },
            {
                path: 'clientes',
                loadChildren: () => import('../../pages/clients/clients.module').then(x => x.ClientsModule),
                canActivate: [authGuard],
                data: { adminRequired: true }
            },
            {
                path: 'produtos',
                loadChildren: () => import('../../pages/products/products.module').then(x => x.ProductsModule),
            },
            {
                path: 'pedidos',
                loadChildren: () => import('../../pages/requests/requests.module').then(x => x.RequestsModule),
            },
            {
                path: 'veiculos',
                loadChildren: () => import('../../pages/vehicle/vehicle.module').then(x => x.VehicleModule),
                canActivate: [authGuard],
                data: { adminRequired: true }
            },
            {
                path: 'transportadoras',
                loadChildren: () => import('../../pages/shipping-company/shipping-company.module').then(x => x.ShippingCompanyModule),
                canActivate: [authGuard],
                data: { adminRequired: true }
            },
            {
                path: 'acesso-negado',
                loadChildren: () => import('../../pages/acesso-negado/acesso-negado.module').then(x => x.AcessoNegadoModule),
            },
        ]
    }
];
