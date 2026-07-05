import { Component, inject, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  imports: [ MenubarModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {
  private router: Router = inject(Router);

  items: MenuItem[] = []; 

  ngOnInit(): void {
    this.loadMenu(); 
  }

  linkInicio(){
    this.router.navigateByUrl('/layout/main/inicio')
  }

  linkHome() {
    this.router.navigateByUrl('/pages/home');
  }

  linkSalir(){
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/layout/main/inicio');
  }
  
private loadMenu() {
  const token = sessionStorage.getItem('token');
  
  if (!token) {
    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-user',
        routerLink: '/layout/main/inicio' 
      }
    ];
  } else {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/pages/home' 
      },
      {
        label: 'Salir',
        icon: 'pi pi-sign-out',
        command: () => this.linkSalir() 
      }
    ];
  }
}
} 