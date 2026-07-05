import {HomeComponent} from './home/home.component';
import { ProductosComponent } from './auth/productos/productos.component';



export default [
  
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',

  },

  {
    path:'auth/productos',
    component: ProductosComponent
    
  }
  
];
