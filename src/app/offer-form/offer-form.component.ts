import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FetchServiceService } from '../fetch-service.service';


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
    country: 'Deutschland'
  };

  goods = [];


  constructor(
    private fetchService: FetchServiceService
  ) {
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
      experienceWithPCR: undefined,
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

  sendRequest(formInput) {
    let data = {
      organisation: 'organisation',
      person: 'person',
      mail: 'mail',
      phone: 'phone',
      address: {
        street: 'street',
        houseNumber: 'houseNumber',
        zipCode: 'zipCode',
        city: 'city',
        country: 'country'
      },
      manpower: {},
      device: {},
      material: {}
    }

    this.fetchService.sendOffer(data);

  }
}
