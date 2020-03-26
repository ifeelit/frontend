import { Component, OnInit} from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { Router } from '@angular/router';
import { Provider, providerToApi } from '../_types/Provider';
import { Consumable } from '../_types/Consumable';
import { Device, deviceToApi } from '../_types/Device';
import { Personnel, personnelToApi } from '../_types/Personnel';


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


  provider: Provider = {
    address: {
      street: '',
      streetNumber: '',
      postalCode: '',
      city: '',
      country: 'Deutschland',
    },
    institution: '',
    name: '',
    mail: '',
    phone: '',
  };

  checkedDatenschutz: false;

  resources: Array<{ type: string, resource: Consumable | Device | Personnel, checkedEhrenamt?: boolean }> = [];

  recaptcha: string;


  ngOnInit(): void {
  }


  onSubmit() {
    this.sendRequest();
  }


  resolved(captchaResponse) {
    this.recaptcha = captchaResponse;
  }


  deleteItem(delGood) {
    if (this.resources.length !== 0) {
      this.resources.splice(delGood, 1);
    }
  }


  addPersonnel() {
    this.resources.push({
      type: 'personnel',
      resource: {
        qualification: '',
        institution: '',
        researchGroup: '',
        area: '',
        experienceWithPCR: false,
        notes: '',
        address: {
          postalCode: '',
          country: 'Deutschland',
        }
      },
      checkedEhrenamt: false,
    });
  }


  addDevice() {
    this.resources.push({
      type: 'device',
      resource: {
        category: '',
        name: '',
        manufacturer: '',
        orderNumber: '',
        amount: undefined,
        notes: '',
        address: {
          postalCode: '',
          country: 'Deutschland',
        }
      },
    });
  }


  addConsumable() {
    this.resources.push({
      type: 'consumable',
      resource: {
        category: '',
        name: '',
        manufacturer: '',
        orderNumber: '',
        amount: undefined,
        unit: '',
        notes: '',
        address: {
          postalCode: '',
          country: 'Deutschland',
        }
      },
    });
  }


  isValid() {
    let valid = this.provider.institution && this.provider.name && this.provider.mail
      && this.provider.address.street && this.provider.address.streetNumber && this.provider.address.postalCode
      && this.provider.address.city && this.provider.address.country && this.checkedDatenschutz;
    for (const good of this.resources) {
      if (good.type === 'personnel') {
        const personnel = good.resource as Personnel;
        valid = valid && personnel.qualification && personnel.institution && personnel.area
          && personnel.address.postalCode && good.checkedEhrenamt;
      } else if (good.type === 'device') {
        const device = good.resource as Device;
        valid = valid && device.category && device.name && device.address.postalCode && device.amount;
      } else if (good.type === 'consumable') {
        const consumable = good.resource as Consumable;
        valid = valid && consumable.category && consumable.name && consumable.address.postalCode
          && consumable.amount && consumable.unit;
      }
    }
    return valid;
  }


  async sendRequest() {
    if (!this.isValid()) {
      return;
    }

    const data = {
      provider: providerToApi(this.provider),
      personals: [],
      consumables: [],
      devices: []
    };

    this.resources.forEach((elem) => {
      if (elem.type === 'personnel') {
        data.personals.push(personnelToApi(elem.resource as Personnel));
      } else if (elem.type === 'device') {
        data.devices.push(deviceToApi(elem.resource as Device));
      } else if (elem.type === 'consumable') {
        data.consumables.push(elem.resource as Consumable);
      }
    });

    let key = await this.fetchService.sendOffer(data, this.recaptcha);
    // Todo The server should stop returning weird stuff...
    if (key[0] === '"' && key[key.length - 1] === '"') {
      key = key.slice(1, key.length - 1);
    }
    this.router.navigateByUrl('/change/' + key + '?new-created');
  }
}
