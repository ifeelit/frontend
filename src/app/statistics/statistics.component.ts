import { Component, OnInit, Provider } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { Personnel, personnelFromApi } from '../_types/Personnel';
import { Device, deviceFromApi } from '../_types/Device';
import { Consumable, consumableFromApi } from '../_types/Consumable';
import { providerFromApi } from '../_types/Provider';
import { DeviceCategory, deviceCategoryTo } from '../_types/DeviceCategory';
import { ConsumableCategory, consumableCategoryTo } from '../_types/ConsumableCategory';
import { PersonnelQualification, personnelQualificationTo } from '../_types/PersonnelQualification';
import { PersonnelArea, personnelAreaTo } from '../_types/PersonnelArea';
import { LocaleService } from '../locale.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  DeviceCategory = DeviceCategory;
  deviceCategoryToDE = deviceCategoryTo(this.localeService.locale);
  ConsumableCategory = ConsumableCategory;
  consumableCategoryTo = consumableCategoryTo(this.localeService.locale);
  PersonnelQualification = PersonnelQualification;
  personnelQualificationToDE = personnelQualificationTo(this.localeService.locale);
  PersonnelArea = PersonnelArea;
  personnelAreaToDE = personnelAreaTo(this.localeService.locale);

  constructor(
      private localeService: LocaleService,
      private fetchService: FetchServiceService,
  ) { }

  ngOnInit(): void {
  }

}
