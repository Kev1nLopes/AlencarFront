import { Routes } from "@angular/router";
import { authGuard } from "./guards/auth.guard";

export const AppRoutes : Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule),
        canActivate: [authGuard]
    }
]