import { Component, Input, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { ResourceContactMessage } from '../_types/ResourceContactMessage';


@Component({
  selector: 'app-offer-search-contact-form',
  templateUrl: './offer-search-contact-form.component.html',
  styleUrls: ['./offer-search-contact-form.component.scss']
})
export class OfferSearchContactFormComponent implements OnInit {

  @Input() resourceType: string;
  @Input() resourceId: number;

  message: ResourceContactMessage = {
    senderName: '',
    senderInstitution: '',
    senderEmail: '',
    senderPhone: '',
    message: '',
  };
  recaptcha: string;

  messageSent = false;


  constructor(
    private fetchService: FetchServiceService,
  ) {
  }


  ngOnInit(): void {
  }


  captchaResolved(recaptcha) {
    this.recaptcha = recaptcha;
  }


  async onSubmit() {
    if (!this.isValid()) {
      return;
    }
    await this.fetchService.sendResourceContactMessage(this.resourceType,
      this.resourceId, this.message, this.recaptcha);
    this.messageSent = true;
  }


  isValid() {
    return this.message.senderName && this.message.senderInstitution && this.message.senderEmail
      && this.message.message;
  }
}
