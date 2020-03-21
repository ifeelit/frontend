import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {

  contactData = {
    organisation: '',
    person: '',
    mail: '',
    phone: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    country: ''
  };

  goods = [];


  constructor() {
  }


  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.contactData, this.goods);
  }

  deleteItem(delGood) {
    if (this.goods.length !== 0) {
      this.goods.splice(delGood,1);
    }
  }

  addPersonnel() {
    this.goods.push({
      type: 'personnel',
      qualification: '',
      institution: '',
      researchGroup: '',
      area: '',
      experienceWithPCR: '',
      notes: '',
    });
  }


  addDevice() {
    this.goods.push({
      type: 'device',
      category: '',
      deviceName: '',
      locationPostalCode: '',
      number: undefined,
    });
  }


  addConsumable() {
    this.goods.push({
      type: 'consumable',
      category: '',
      deviceName: '',
      locationPostalCode: '',
      number: undefined,
    });
  }

}
