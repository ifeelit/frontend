import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { ReCaptchaWrapperComponent } from "../re-captcha-wrapper/re-captcha-wrapper.component";


@Component({
  selector: 'app-region-subscription-form',
  templateUrl: './region-subscription-form.component.html',
  styleUrls: ['./region-subscription-form.component.scss']
})
export class RegionSubscriptionFormComponent implements OnInit {

  @ViewChild(ReCaptchaWrapperComponent) reCaptchaComponent: ReCaptchaWrapperComponent;

  data = {
    name: undefined,
    institution: undefined,
    email: undefined,
    postalCode: undefined
  };

  checkedDatenschutz = false;

  recaptcha: string;

  submitted = false;

  error: {
    status: number,
    message: any,
  };


  constructor(
    private fetchService: FetchServiceService,
  ) {
  }


  ngOnInit(): void {
  }


  isValid(): boolean {
    return !!(this.data.name && this.data.institution && this.data.email && this.data.postalCode
      && this.checkedDatenschutz);
  }


  resolved(captchaResponse) {
    this.recaptcha = captchaResponse;
  }


  async onSubmit() {
    if (!this.isValid()) {
      return;
    }
    const response = await this.fetchService.subscribeRegion({
      email: this.data.email,
      name: this.data.name,
      institution: this.data.institution,
      postalcode: this.data.postalCode
    }, this.recaptcha);
    if (response.error) {
      this.reCaptchaComponent.reset();
      this.error = response.error;
    } else {
      this.submitted = true;
      this.error = undefined;
    }
  }
}
