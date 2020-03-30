import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Consumable } from '../_types/Consumable';
import { Device } from '../_types/Device';
import { Personnel } from '../_types/Personnel';
import { DeviceCategory, deviceCategoryTo } from '../_types/DeviceCategory';
import { ConsumableCategory, consumableCategoryTo} from '../_types/ConsumableCategory';
import { PersonnelQualification, personnelQualificationTo } from '../_types/PersonnelQualification';
import { PersonnelArea, personnelAreaTo } from '../_types/PersonnelArea';
import { LocaleService } from '../locale.service';


@Component({
  selector: 'app-offer-form-resource-block',
  templateUrl: './offer-form-resource-block.component.html',
  styleUrls: ['./offer-form-resource-block.component.scss']
})
export class OfferFormResourceBlockComponent implements OnInit {

  DeviceCategory = DeviceCategory;
  deviceCategoryToDE = deviceCategoryTo(this.localeService.locale);
  ConsumableCategory = ConsumableCategory;
  consumableCategoryTo = consumableCategoryTo(this.localeService.locale);
  PersonnelQualification = PersonnelQualification;
  personnelQualificationToDE = personnelQualificationTo(this.localeService.locale);
  PersonnelArea = PersonnelArea;
  personnelAreaToDE = personnelAreaTo(this.localeService.locale);

  @Input('resource') r: { type: string, resource: Consumable | Device | Personnel, checkedEhrenamt?: boolean };
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();


  constructor(
    private localeService: LocaleService,
  ) {
  }


  ngOnInit(): void {
  }


  getEnumValues(enumElement) {
    return Object.values(enumElement);
  }


  deleteItem() {
    this.delete.emit();
  }


  toP(r: { type: string; resource: Consumable | Device | Personnel; checkedEhrenamt?: boolean }): Personnel {
    return r.resource as Personnel;
  }

  toC(r: { type: string; resource: Consumable | Device | Personnel; checkedEhrenamt?: boolean }): Consumable {
    return r.resource as Consumable;
  }


  toD(r: { type: string; resource: Consumable | Device | Personnel; checkedEhrenamt?: boolean }): Device {
    return r.resource as Device;
  }
}
