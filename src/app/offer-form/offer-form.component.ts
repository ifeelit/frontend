import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { Router } from "@angular/router";


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
    private fetchService: FetchServiceService,
    private router: Router,
  ) {
  }


  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.contactData, this.goods);
    alert('Das Angebot wurde erfolgreich eingestellt. Vielen Dank.');
    this.router.navigate(['/']);
    // this.sendRequest();
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
        address: {
          street: this.contactData.street,
          streetnumber: this.contactData.street,
          postalcode: this.contactData.postalCode,
          city: this.contactData.city,
          country: this.contactData.country
        },
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
            address: {
              postalcode: elem.locationPostalCode
            },
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
            address: {
              postalcode: elem.locationPostalCode
            },
            amount: elem.number
          }
        );
      }
    });

    this.fetchService.sendOffer(data);

  }
}
