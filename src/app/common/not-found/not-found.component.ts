import {Component, inject} from '@angular/core';
import {Router, } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  private router: Router = inject(Router);

  linkInicio(){
    this.router.navigateByUrl('');
  }

}
