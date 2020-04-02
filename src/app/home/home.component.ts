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
    date: '02.04.2020, 19:30',
    availableResources: {
      devices: [
        { category: DeviceCategory.VORTEXER, number: 3 },
        { category: DeviceCategory.PCR_THERMOCYCLER, number: 9 },
        { category: DeviceCategory.RT_PCR_THERMOCYCLER, number: 1 },
        { category: DeviceCategory.ZENTRIFUGE, number: 3 },
        { category: DeviceCategory.PIPETTE, number: 99 },
        { category: DeviceCategory.SONSTIGES, number: 18 },
      ],
      consumables: [
        { category: ConsumableCategory.READOUTPLATES, numbers: [{ unit: Unit.PACK, number: 4 }] },
        { category: ConsumableCategory.SCHUTZBRILLE, numbers: [{ unit: Unit.PACK, number: 5 }] },
        { category: ConsumableCategory.HANDSCHUHE, numbers: [{ unit: Unit.PACK, number: 128 }] },
        { category: ConsumableCategory.MASKE, numbers: [{ unit: Unit.PIECE, number: 6 }] },
        { category: ConsumableCategory.REAKTIONSGEFAESSE, numbers: [ { unit: Unit.PACK, number: 10 }, { unit: Unit.PIECE, number: 20 }] },
        { category: ConsumableCategory.SONSTIGES, numbers: [{ unit: Unit.OTHERS, number: 1 }] },
      ],
      personnel: 40,
    }
  };


  constructor(
  ) { }


  ngOnInit(): void {
  }

}
