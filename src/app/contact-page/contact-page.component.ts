import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  requestData = {
    name: '',
    phone: '',
    email: '',
    topic: '',
    notes: ''
  };

  recaptcha: string;

  checkedDatenschutz: boolean;

  callBackSubmit = false;


  constructor(
    private fetchService: FetchServiceService,
  ) {
  }


  ngOnInit(): void {
  }


  resolved(captchaResponse) {
    this.recaptcha = captchaResponse;
  }


  isValid() {
    return this.requestData.name && this.requestData.phone && this.requestData.topic && this.checkedDatenschutz;
  }


  onSubmit() {
    this.sendRequest();
    this.callBackSubmit = true;
    this.requestData = {
      name: '',
      phone: '',
      email: '',
      topic: '',
      notes: ''
    };
  }


  async sendRequest() {
    if (!this.isValid()) {
      return;
    }
    await this.fetchService.requestCall(this.requestData, this.recaptcha);
  }

}
