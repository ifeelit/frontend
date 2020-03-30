import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LocaleService } from '../locale.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  url;
  locale;
  environment = environment;


  constructor(
    private router: Router,
    private localeService: LocaleService,
  ) {
    this.locale = localeService.locale;
  }


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }


  isProduction() {
    return environment.environment === 'production';
  }
}
