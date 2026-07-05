import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';

export const roleGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot,_state: RouterStateSnapshot) => {
    const router = inject(Router);
    const myRole = sessionStorage.getItem('admin');

    const admins = route.data['admins'];
    console.log('roleGuard:', myRole);
    for (const admin of admins) {
      if (admin === myRole) {
        return true;
      }
    }

    router.navigate(['not-found']);
    return false;
  }
