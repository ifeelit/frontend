import { Component, Input, OnInit, Provider } from '@angular/core';
import { Unit, unitTo } from '../_types/Unit';
import { DeviceCategory, deviceCategoryTo } from '../_types/DeviceCategory';
import { ConsumableCategory, consumableCategoryTo } from '../_types/ConsumableCategory';
import { LocaleService } from '../locale.service';
import { Device } from '../_types/Device';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  DeviceCategory = DeviceCategory;
  deviceCategoryTo = deviceCategoryTo(this.localeService.locale);
  ConsumableCategory = ConsumableCategory;
  consumableCategoryTo = consumableCategoryTo(this.localeService.locale);
  Unit = Unit;
  unitTo = unitTo(this.localeService.locale);

  @Input() data: {
    date: string,
    availableResources: {
      devices: Array<{ category: DeviceCategory, number: number }>,
      consumables: Array<{
        category: ConsumableCategory,
        numbers: Array<{ unit: Unit, number: number }>
      }>,
      personnel: number,
    },
  };


  constructor(
      private localeService: LocaleService,
  ) { }


  ngOnInit(): void {
  }


  formatConsumableNumbers(numbers: Array<{ unit: Unit; number: number }>) {
    if (numbers.length === 0) {
      return '';
    }
    let s = numbers[0].number + ' ' + this.unitTo[numbers[0].unit];
    for (let i = 1; i < numbers.length; i++) {
      s += ', ' + numbers[i].number + ' ' + this.unitTo[numbers[i].unit];
    }
    return s;
  }
}
