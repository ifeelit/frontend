import { Component, OnInit } from '@angular/core';
import { DeviceCategory } from '../_types/DeviceCategory';
import { Consumable } from '../_types/Consumable';
import { ConsumableCategory } from '../_types/ConsumableCategory';
import { Unit } from '../_types/Unit';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  logos = [
    {
      image: 'tuk.png',
      name: 'TU Kaiserslautern',
      link: 'https://www.uni-kl.de'
    },
    {
      image: 'wirvsvirus.png',
      name: 'WirVsVirus Hackathon',
      link: 'https://wirvsvirushackathon.org'
    }
  ];


  statistics = {
    date: '31.03.2020, 18:00',
    availableResources: {
      devices: [
        { category: DeviceCategory.PCR_THERMOCYCLER, number: 5 },
        { category: DeviceCategory.RT_PCR_THERMOCYCLER, number: 1 },
        { category: DeviceCategory.ZENTRIFUGE, number: 3 },
        { category: DeviceCategory.SONSTIGES, number: 18 },
        { category: DeviceCategory.PIPETTE, number: 99 },
      ],
      consumables: [
        { category: ConsumableCategory.SCHUTZBRILLE, numbers: [{ unit: Unit.PACK, number: 5 }] },
        { category: ConsumableCategory.HANDSCHUHE, numbers: [{ unit: Unit.PACK, number: 80 }] },
        { category: ConsumableCategory.REAKTIONSGEFAESSE, numbers: [ { unit: Unit.PACK, number: 10 }, { unit: Unit.PIECE, number: 20 }] },
      ],
      personnel: 33,
    }
  };


  constructor(
  ) { }


  ngOnInit(): void {
  }

}
