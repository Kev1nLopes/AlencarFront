import { Routes } from "@angular/router";
import { authGuard } from "./guards/auth.guard";
import { LoginModule } from './pages/auth/login/login.module';

export const AppRoutes : Routes = [
    {
        path: '',
        loadChildren: () => import('./layouts/public-layout/public-layout.module').then(x => x.PublicLayoutModule),
        canActivate: [authGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('./layouts/private-layout/private-layout.module').then(x => x.PrivateLayoutModule),
        
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/auth/login/login.module').then(x => x.LoginModule),
        canActivate: [authGuard]
    }
]