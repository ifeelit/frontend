import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="site-content">
      <main class="main-content">
        <div class="fullwidth-block"></div>
        <div class="fullwidth-block">
          <div class="container">
            <router-outlet></router-outlet>
          </div>
        </div>
      </main> <!-- .main-content -->
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {

}
