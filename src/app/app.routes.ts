import {Routes} from '@angular/router';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {tokenGuard} from './guards/token.guard';
import {MainComponent} from './layout/main/main.component';
import { InicioComponent } from './layout/main/inicio/inicio.component';


export const routes: Routes = [


  {
    path: '',
    component: MainComponent,
    canActivateChild: [tokenGuard],
    children: [
      {
        path: 'pages',
        canActivate: [tokenGuard],
        loadChildren: () => import('./pages/pages.routes'),
      }

    ]
  },

  {
    path: 'layout/main/inicio',
    component: InicioComponent,
  },

 {
    path: 'not-found',
    component: NotFoundComponent
 },

  {
    path: '**',
    redirectTo: 'not-found',
   
  }
  
];