import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {
  offerForm;

  constructor(
    private formBuilder: FormBuilder,
  ) {
      this.offerForm = this.formBuilder.group({
        offering: '',
        serialnumber: '',
        organisation: '',
        person: '',
        mail: '',
        phone: '',
        street: '',
        houseNumber: '',
        postalCode: '',
        city: '',
        country: ''
      });
   }

  ngOnInit(): void {
  }

  onSubmit(customData) {
    //Process new offer here
    this.offerForm.reset();
    console.warn('New offer was generated', customData);
  }

}
