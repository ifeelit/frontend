import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="site-content">
  <app-header></app-header>
  <router-outlet (activate)="onActivate($event)"></router-outlet>
  <app-footer></app-footer>
  </div>
  `,
  styles: []
})
export class AppComponent {

  onActivate(event) {
    window.scroll(0, 0);
  }

}
