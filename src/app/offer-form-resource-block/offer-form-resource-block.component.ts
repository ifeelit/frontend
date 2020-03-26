import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Consumable } from '../_types/Consumable';
import { Device } from '../_types/Device';
import { Personnel } from '../_types/Personnel';
import { DeviceCategory, deviceCategoryToDE } from '../_types/DeviceCategory';
import { ConsumableCategory, consumableCategoryToDE } from '../_types/ConsumableCategory';
import { PersonnelQualification, personnelQualificationToDE } from '../_types/PersonnelQualification';
import { PersonnelArea, personnelAreaToDE } from '../_types/PersonnelArea';


@Component({
  selector: 'app-offer-form-resource-block',
  templateUrl: './offer-form-resource-block.component.html',
  styleUrls: ['./offer-form-resource-block.component.scss']
})
export class OfferFormResourceBlockComponent implements OnInit {

  DeviceCategory = DeviceCategory;
  deviceCategoryToDE = deviceCategoryToDE;
  ConsumableCategory = ConsumableCategory;
  consumableCategoryToDE = consumableCategoryToDE;
  PersonnelQualification = PersonnelQualification;
  personnelQualificationToDE = personnelQualificationToDE;
  PersonnelArea = PersonnelArea;
  personnelAreaToDE = personnelAreaToDE;

  @Input('resource') r: { type: string, resource: Consumable | Device | Personnel, checkedEhrenamt?: boolean };
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();


  constructor() {
  }


  ngOnInit(): void {
  }


  getEnumValues(enumElement) {
    return Object.values(enumElement);
  }


  deleteItem() {
    this.delete.emit();
  }


  unitSelected(r: {type: string; resource: Consumable | Device | Personnel; checkedEhrenamt?: boolean}, $event: Event) {
    (r.resource as Consumable).unit = ($event.target as any).value;
  }


  unitSelfDefined(r: { type: string; resource: Consumable | Device | Personnel; checkedEhrenamt?: boolean },
                  $event: Event) {
    (r.resource as Consumable).unit = ($event.target as any).value;
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
