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
    this.sendRequest();
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
      manufacturer: '',
      ordernumber: '',
      locationPostalCode: '',
      number: undefined,
      unit: '',
      unitSelfDefined: '',
      notes: '',
    });
  }


  addConsumable() {
    this.goods.push({
      type: 'consumable',
      category: '',
      deviceName: '',
      manufacturer: '',
      ordernumber: '',
      locationPostalCode: '',
      number: undefined,
      unit: '',
      unitSelfDefined: '',
      notes: '',
    });
  }

  sendRequest() {

    let data = {
      provider: {
        name: this.contactData.person,
        organisation: this.contactData.organisation,
        street: this.contactData.street,
        streetnumber: this.contactData.street,
        postalcode: this.contactData.postalCode,
        city: this.contactData.city,
        country: this.contactData.country,
        mail: this.contactData.mail,
        phone: this.contactData.phone
      },
      manpowers: [],
      consumables: [],
      devices: []
    }

    this.goods.forEach(function (elem) {
      if (elem.type === 'personnel'){
        data.manpowers.push(
          {
            qualification: elem.qualification,
            institution: elem.institution,
            area: elem.area,
            researchgroup: elem.researchGroup,
            experience_rt_pcr: elem.experienceWithPCR,
            annotation: elem.notes
          }
        );
      }
      else if (elem.type === 'device') {
        data.devices.push(
          {
            category: elem.category,
            name: elem.deviceName,
            manufacturer: elem.manufacturer,
            ordernumber: elem.ordernumber,
            postalcode: elem.locationPostalCode,
            amount: elem.number
          }
        );
      }
      else if (elem.type === 'consumable') {
        data.consumables.push(
          {
            category: elem.category,
            name: elem.deviceName,
            manufacturer: elem.manufacturer,
            ordernumber: elem.ordernumber,
            postalcode: elem.locationPostalCode,
            amount: elem.number
          }
        );
      }
    });

    this.fetchService.sendOffer(data);

  }
}
