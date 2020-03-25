import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private fetchService: FetchServiceService,
    private router: Router,
  ) { }

  requestData = {
    name: '',
    phone: '',
    email: '',
    topic: '',
    notes: ''
  };

  recaptcha: string;

  callBackSubmit: boolean;



  ngOnInit(): void {
    this.callBackSubmit = false;
  }

  resolved(captchaResponse) {
    this.recaptcha = captchaResponse;
  }

  isValid() {

    const valid = this.requestData.name && this.requestData.phone && this.requestData.topic;

    return valid;
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
    this.fetchService.requestCall(this.requestData, this.recaptcha);
  }

}
