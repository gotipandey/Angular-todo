import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Traing Assignments';

  constructor(
    private router: Router
  ) {
    
  }

  /*login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.router.navigate(['/login']);
  }*/
}
