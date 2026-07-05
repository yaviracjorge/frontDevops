import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';

export const tokenGuard: CanActivateFn =
  (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
    console.log('tokenGuard');
    const router = inject(Router);

    const token = sessionStorage.getItem('token');

    if (token == null) {
      router.navigate(['layout/main/inicio']);
      return false;
    }
    return true;
  }
