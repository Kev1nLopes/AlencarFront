import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { isUserAdmin } from '../utils/getAuthorities';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);

  const isAdmin = isUserAdmin();
  const token = sessionStorage.getItem('token');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  if (route.data && route.data['adminRequired'] && isAdmin) {
    router.navigate(['/acesso-negado']);
    return false;
  }

  return true;
};
