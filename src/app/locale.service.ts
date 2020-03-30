import { Inject, Injectable, LOCALE_ID } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  locale: string;


  constructor(
    @Inject(LOCALE_ID) private l: string,
  ) {
    if (l === 'en-GB') {
      this.locale = 'en';
    } else {
      this.locale = 'de';
    }
  }
}
