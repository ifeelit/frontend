import { AfterViewInit, Component, OnInit, ViewChildren } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {


  constructor(
    private fetchService: FetchServiceService,
    private router: Router,
  ) {
  }

  buttonDisabled = true;

  contactData = {
    organisation: '',
    person: '',
    mail: '',
    phone: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    country: 'Deutschland',
    checkedDatenschutz: false,
  };

  goods = [];

  recaptcha: any[];


  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.contactData, this.goods);
    this.sendRequest();
  }
  resolved(captchaResponse) {
    this.recaptcha = captchaResponse;
    console.log(this.recaptcha);
    this.buttonDisabled = false;
    console.log(this.buttonDisabled);
  }

  deleteItem(delGood) {
    if (this.goods.length !== 0) {
      this.goods.splice(delGood, 1);
    }
  }


  addPersonnel() {
    this.goods.push({
      type: 'personnel',
      qualification: '',
      institution: '',
      researchGroup: '',
      area: '',
      experienceWithPCR: false,
      notes: '',
      checkedEhrenamt: false,
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


  isValid() {
    let valid = this.contactData.organisation && this.contactData.person && this.contactData.mail
      && this.contactData.street && this.contactData.houseNumber && this.contactData.postalCode
      && this.contactData.city && this.contactData.country && this.contactData.checkedDatenschutz;
    for (const good of this.goods) {
      if (good.type === 'personnel') {
        valid = valid && good.qualification && good.institution && good.area && good.checkedEhrenamt;
      } else if (good.type === 'device') {
        valid = valid && good.category && good.deviceName && good.locationPostalCode && good.number;
      } else if (good.type === 'consumable') {
        valid = valid && good.category && good.deviceName && good.locationPostalCode && good.number && good.unit;
      }
    }
    return valid;
  }


  async sendRequest() {
    if (!this.isValid()) {
      return;
    }

    const data = {
      provider: {
        address: {
          street: this.contactData.street,
          streetnumber: this.contactData.houseNumber,
          postalcode: this.contactData.postalCode,
          city: this.contactData.city,
          country: this.contactData.country,
        },
        name: this.contactData.person,
        organisation: this.contactData.organisation,
        mail: this.contactData.mail,
        phone: this.contactData.phone
      },
      personals: [],
      consumables: [],
      devices: []
    };

    this.goods.forEach((elem) => {
      if (elem.type === 'personnel') {
        data.personals.push(
          {
            qualification: elem.qualification,
            institution: elem.institution,
            area: elem.area,
            researchgroup: elem.researchGroup,
            experience_rt_pcr: elem.experienceWithPCR,
            annotation: elem.notes
          }
        );
      } else if (elem.type === 'device') {
        data.devices.push(
          {
            category: elem.category,
            name: elem.deviceName,
            manufacturer: elem.manufacturer,
            ordernumber: elem.ordernumber,
            address: {
              postalcode: elem.locationPostalCode,
              country: 'Deutschland'
            },
            amount: elem.number
          }
        );
      } else if (elem.type === 'consumable') {
        data.consumables.push(
          {
            category: elem.category,
            name: elem.deviceName,
            manufacturer: elem.manufacturer,
            ordernumber: elem.ordernumber,
            address: {
              postalcode: elem.locationPostalCode,
              country: 'Deutschland'
            },
            amount: elem.number,
            unit: elem.unit !== 'other' ? elem.unit : elem.unitSelfDefined,
          }
        );
      }
    });

    let key = await this.fetchService.sendOffer(data);
    // Todo The server should stop returning weird stuff...
    if (key[0] === '"' && key[key.length - 1] === '"') {
      key = key.slice(1, key.length - 1);
    }
    this.router.navigateByUrl('/change/' + key + '?new-created');
  }
}
