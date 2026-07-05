import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TopbarComponent } from '../topbar/topbar.component';
@Component({
  selector: 'app-main',
  imports: [ButtonModule, TopbarComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
