import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';
import { AuthService } from '../../../../auth.service'; 

@Component({
  selector: 'app-inicio',
  imports: [FormsModule, CommonModule, MessageModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  email!: string;
  password!: string;
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const credentials = { email: this.email, password: this.password };
    this.authService.register(credentials).subscribe({
      next: (response: any) => {
        console.log('Usuario registrado:', response.user);
        sessionStorage.setItem('token', response.token); // Laravel devolverá el token
        this.router.navigate(['/pages/home']);
      },
      error: (error) => console.error('Error al registrar el usuario:', error)
    });
  }

  login() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe({
      next: (response: any) => {
        console.log('Usuario autenticado:', response.user);
        sessionStorage.setItem('token', response.token); // Laravel devolverá el token
        this.router.navigate(['/pages/home']);
      },
      error: (error) => {
        this.errorMsg = 'Usuario o contraseña incorrectos';
        console.error('Error de autenticación:', error);
        setTimeout(() => this.errorMsg = '', 3000);
      }
    });
  }

  paginaPrincipal() {
    this.router.navigate(['/']);
  }
}