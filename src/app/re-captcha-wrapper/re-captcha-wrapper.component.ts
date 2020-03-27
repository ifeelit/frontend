import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-re-captcha-wrapper',
  templateUrl: './re-captcha-wrapper.component.html',
  styleUrls: ['./re-captcha-wrapper.component.scss']
})
export class ReCaptchaWrapperComponent implements OnInit {

  @Output() resolved: EventEmitter<string> = new EventEmitter<string>();


  constructor() {
  }


  ngOnInit(): void {
  }


  onResolved(reCaptchaResponse: string) {
    this.resolved.emit(reCaptchaResponse);
  }
}
