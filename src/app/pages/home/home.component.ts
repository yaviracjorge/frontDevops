import {Component, inject, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router} from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  imports: [FormsModule,MenubarModule],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})

export  class HomeComponent implements OnInit {
  private router: Router = inject(Router);

  items: MenuItem[] = []; 

  ngOnInit(): void {
    this.loadMenu(); 
  }
    irAProductos() {
    this.router.navigateByUrl('/pages/auth/productos');
  }
   
private loadMenu() {
    this.items = [

      {
        label: 'Productos',
        icon: 'pi pi-box',
        command: () => this.irAProductos()
      }
     
    ];
  }
}
