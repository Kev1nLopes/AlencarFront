import { Routes } from "@angular/router";
import { authGuard } from "./guards/auth.guard";
import { LoginModule } from './pages/auth/login/login.module';

export const AppRoutes : Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule),
        canActivate: [authGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/auth/login/login.module').then(x => x.LoginModule),
        canActivate: [authGuard]
    }
]