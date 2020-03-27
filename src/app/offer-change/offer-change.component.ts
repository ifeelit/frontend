import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchServiceService } from '../fetch-service.service';
import { environment } from '../../environments/environment';
import { Provider, providerFromApi } from '../_types/Provider';
import { Consumable, consumableFromApi } from '../_types/Consumable';
import { Device, deviceFromApi } from '../_types/Device';
import { Personnel, personnelFromApi } from '../_types/Personnel';
import { personnelQualificationToDE } from '../_types/PersonnelQualification';
import { personnelAreaToDE } from '../_types/PersonnelArea';
import { deviceCategoryToDE } from '../_types/DeviceCategory';
import { consumableCategoryToDE } from '../_types/ConsumableCategory';


@Component({
  selector: 'app-offer-change',
  templateUrl: './offer-change.component.html',
  styleUrls: ['./offer-change.component.scss']
})
export class OfferChangeComponent implements OnInit {

  deviceCategoryToDE = deviceCategoryToDE;
  consumableCategoryToDE = consumableCategoryToDE;
  personnelQualificationToDE = personnelQualificationToDE;
  personnelAreaToDE = personnelAreaToDE;

  // Whether the offer was just created
  isNew: boolean;
  key: string;
  currentUrl: string;

  data: {
    provider: Provider,
    resources: Array<{ type: string, resource: Consumable | Device | Personnel}>
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fetchService: FetchServiceService
  ) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      const isNewParam = this.route.snapshot.queryParamMap.get('new-created');
      this.isNew = isNewParam !== null && isNewParam !== undefined;

      this.key = params.key;
      this.currentUrl = environment.pageHost + '/change/' + this.key;
      const response = await this.fetchService.reviewOffer(this.key);
      this.data = {
        provider: providerFromApi(response.provider),
        resources: []
      };

      // Add personnel to data
      response.personals.forEach(element => {
        this.data.resources.push(
          {
            type: 'personnel',
            resource: personnelFromApi(element),
          }
        );
      });

      // Add devices to data
      response.devices.forEach(element => {
        this.data.resources.push(
          {
            type: 'device',
            resource: deviceFromApi(element),
          }
        );
      });

      // Add consumables to data
      response.consumables.forEach(element => {
        this.data.resources.push(
          {
            type: 'consumable',
            resource: consumableFromApi(element),
          }
        );
      });
    });
  }


  // Delete Content on submit
  // Currently button is deleted
  onSubmit(): void {
    this.fetchService.deleteOffer(this.key);
    // Redirect to home page
    this.router.navigateByUrl('');
  }


  // Here for ater use of deleting single entries
  deleteItem(delGood: number): void {
    if (this.data.resources.length !== 0) {
      this.data.resources.splice(delGood, 1);
    }
  }


  toP(r: { type: string; resource: Consumable | Device | Personnel }): Personnel {
    return r.resource as Personnel;
  }

  toC(r: { type: string; resource: Consumable | Device | Personnel }): Consumable {
    return r.resource as Consumable;
  }


  toD(r: { type: string; resource: Consumable | Device | Personnel }): Device {
    return r.resource as Device;
  }
}
