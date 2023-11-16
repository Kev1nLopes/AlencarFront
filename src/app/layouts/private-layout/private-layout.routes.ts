import { Routes } from "@angular/router";
import { PrivateLayoutComponent } from "./private-layout.component";


export const PrivateLayoutRoutes : Routes = [
    {
        path: '',
        component: PrivateLayoutComponent,
        children: [
            {
                path: 'login',
                loadChildren:  () => import('../../pages/auth/login/login.module').then(x => x.LoginModule)
            },
            {
                path: 'register',
                loadChildren:  () => import('../../pages/auth/register/register.module').then(x => x.RegisterModule)
            },
        ]
    }
]