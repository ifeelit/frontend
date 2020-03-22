import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';

@Component({
  selector: 'app-offer-search',
  templateUrl: './offer-search.component.html',
  styleUrls: ['./offer-search.component.scss']
})
export class OfferSearchComponent implements OnInit {

  searchType: string;
  searchQuery;
  postalCode = '';
  results;

  dummyResults = {
    'personnel': [
      {
        provider: {
          name: 'Anna Meier',
          organisation: 'TU München, Lehrstuhl für Biochemie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'anna.meier@tum.de',
          phone: '089 28913006'
        },
        resource: {
          qualification: 'PhD-Student',
          institution: 'TUM',
          researchGroup: 'Mikrobiologie Gruppe',
          area: 'Mikrobiologie',
          experienceWithPCR: 'Ja',
          notes: 'S2-Unterweisung vorhanden'
        },
      },
      {
        provider: {
          name: 'Joseph Anders',
          organisation: 'TU München, Lehrstuhl für Mikrobiologie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'joseph.anders@tum.de',
          phone: '089 28913005'
        },
        resource: {
          qualification: 'MSc-Student',
          institution: 'LMU',
          researchGroup: 'Mikrobiologie Gruppe',
          area: 'Mikrobiologie',
          experienceWithPCR: 'Ja',
        },
      },
      {
        provider: {
          name: 'Anna Meier',
          organisation: 'TU München, Lehrstuhl für Biochemie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'anna.meier@tum.de',
          phone: '089 28913006'
        },
        resource: {
          qualification: 'Laborant',
          institution: 'TUM',
          researchGroup: 'Pharma Gruppe',
          area: 'Pharmakologie',
          experienceWithPCR: 'Ja',
        },
      },
      {
        provider: {
          name: 'Anna Meier',
          organisation: 'TU München, Lehrstuhl für Biochemie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'anna.meier@tum.de',
          phone: '089 28913006'
        },
        resource: {
          qualification: 'TA',
          institution: 'TUM',
          researchGroup: 'Virologie Gruppe',
          area: 'Virologie',
          experienceWithPCR: 'Ja',
          notes: 'Ist PCR-Spezialist'
        },
      },
      {
        provider: {
          name: 'Anna Meier',
          organisation: 'TU München, Lehrstuhl für Biochemie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'anna.meier@tum.de',
          phone: '089 28913006'
        },
        resource: {
          qualification: 'Postdoc',
          institution: 'TUM',
          researchGroup: 'Biochemie Gruppe',
          area: 'Biochemie',
          experienceWithPCR: 'Ja',
          notes: 'Arbeitet mit RNA'
        },
      }
    ],
    'device': [
      {
        provider: {
          name: 'Anna Meier',
          organisation: 'TU München, Lehrstuhl für Biochemie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'anna.meier@tum.de',
          phone: '089 28913006'
        },
        resource: {
          category: 'Real-Time PCR Thermocycler',
          name: 'Light Cycler 480 II',
          manufacturer: 'Roche',
          ordernumber: '05015278001',
          postalcode: '85748',
          amount: '2 Stück',
        }
      },
      {
        provider: {
          name: 'Anna Meier',
          organisation: 'TU München, Lehrstuhl für Biochemie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'anna.meier@tum.de',
          phone: '089 28913006'
        },
        resource: {
          category: 'Real-Time PCR Thermocycler',
          name: 'QuantStudio 6',
          manufacturer: 'ThermoFischer',
          ordernumber: '046453297',
          postalcode: '85748',
          amount: '1 Stück',
        }
      },
      {
        provider: {
          name: 'Joseph Anders',
          organisation: 'TU München, Lehrstuhl für Mikrobiologie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'joseph.anders@tum.de',
          phone: '089 28913005'
        },
        resource: {
          category: 'Real-Time PCR Thermocycler',
          name: 'QuantStudio 7',
          manufacturer: 'ThermoFischer',
          ordernumber: '076345628',
          postalcode: '85748',
          amount: '1 Stück',
        }
      },
      {
        provider: {
          name: 'Hans Bauer',
          organisation: 'Universität Weilheim, Arbeitsgruppe für Zellbiologie',
          address: 'Murnauer Str. 12\n82362  Weilheim',
          mail: 'hans.bauer@uwm.de',
          phone: '088 14178176'
        },
        resource: {
          category: 'Real-Time PCR Thermocycler',
          name: 'CFX96 Touch',
          manufacturer: 'BioRad',
          ordernumber: '00077897',
          postalcode: '85748',
          amount: '1 Stück',
        }
      }
    ],
    'consumable': [
      {
        provider: {
          name: 'Anna Meier',
          organisation: 'TU München, Lehrstuhl für Biochemie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'anna.meier@tum.de',
          phone: '089 28913006'
        },
        resource: {
          category: 'Readoutplates',
          name: 'Light Cycler 480 Multiwell Plate 96, white',
          manufacturer: 'Roche',
          ordernumber: '04729692001',
          postalcode: '85748',
          amount: '30 Stück',
        }
      },
      {
        provider: {
          name: 'Anna Meier',
          organisation: 'TU München, Lehrstuhl für Biochemie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'anna.meier@tum.de',
          phone: '089 28913006'
        },
        resource: {
          category: 'Readoutplates',
          name: 'CFX Plates',
          manufacturer: 'BioRad',
          ordernumber: '1845098',
          postalcode: '85748',
          amount: '10 Stück',
        }
      },
      {
        provider: {
          name: 'Joseph Anders',
          organisation: 'TU München, Lehrstuhl für Mikrobiologie',
          address: 'Lichtenbergstr. 4\n85748 Garching',
          mail: 'joseph.anders@tum.de',
          phone: '089 28913005'
        },
        resource: {
          category: 'Readoutplates',
          name: 'Armadillo 96-Well PCR-Platte',
          manufacturer: 'Thermo Scientific',
          ordernumber: '12640965',
          postalcode: '85748',
          amount: '25 Stück',
        }
      },
      {
        provider: {
          name: 'Hans Bauer',
          organisation: 'Universität Weilheim, Arbeitsgruppe für Zellbiologie',
          address: 'Murnauer Str. 12\n82362  Weilheim',
          mail: 'hans.bauer@uwm.de',
          phone: '088 14178176'
        },
        resource: {
          category: 'Readoutplates',
          name: 'MicroAmp Optische 96-Well-Reaktionsmikrotiterplatte',
          manufacturer: 'Applied Biosystems',
          ordernumber: '10411785',
          postalcode: '85748',
          amount: '5 Stück',
        }
      }
    ],
  };


  constructor(
    private fetchService: FetchServiceService
  ) {
    this.setType('personnel')
  }

  ngOnInit(): void {
  }


  setType(type) {
    if (this.searchType !== type) {
      this.searchType = type;
      this.results = undefined;

      if (type === 'personnel') {
        this.searchQuery = {
          qualification: {
            ta: true,
            labAssistant: true,
            postDoc: true,
            phdStudent: true,
            mscStudent: true,
            bscStudent: true,
            others: true,
          },
          area: {
            chemistry: false,
            biochemistry: false,
            genetics: false,
            cellbiology: false,
            biology: false,
            virology: false,
            microbiology: false,
            molecularbiology: false,
            pharmacology: false,
            medicine: false,
            others: false,
          },
          requiresExperienceWithPCR: false,
        }
      } else if (type === 'device') {
        this.searchQuery = {
          category: '',
        }
      } else if (type === 'consumable') {
        this.searchQuery = {
          category: '',
        }
      }
    }
  }


  setRequiresExperienceWithPCR(b: boolean) {
    this.searchQuery.requiresExperienceWithPCR = b;
  }


  onSubmit() {
    this.results = this.dummyResults[this.searchType];

    let data;
    var targetType;

      if (this.searchType === 'personnel') {
        targetType = 'manpower';
        data = {
          qualification: [],
          area: [],
          experience_rt_pcr: this.searchQuery.requiresExperienceWithPCR,
          postalcode: this.postalCode
        }
        
        for (let key in this.searchQuery.qualification){
          if (this.searchQuery.qualification[key]===true){
            data.qualification.push(key.toString().toLowerCase());
          }
        }

        for (let key in this.searchQuery.area){
          if (this.searchQuery.area[key]===true){
            data.area.push(key.toString().toLowerCase());
          }
        }

      } else if (this.searchType === 'device') {
        targetType = 'devices'
        data = {
          category: this.searchQuery.category,
          postalcode: this.postalCode
        }

      } else if (this.searchType === 'consumable') {
        targetType = 'consumables'
        data = {
          category: this.searchQuery.category,
          postalcode: this.postalCode
        }
      }
    

    this.fetchService.getOffer(targetType,data)
    console.log(this.searchType, this.searchQuery, this.postalCode);
  }
}
