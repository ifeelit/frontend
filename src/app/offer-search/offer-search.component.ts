import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';


@Component({
  selector: 'app-offer-search',
  templateUrl: './offer-search.component.html',
  styleUrls: ['./offer-search.component.scss']
})
export class OfferSearchComponent implements OnInit {

  DISTANCE_KILOMETER = 70;

  searchType: string;
  searchQuery;
  postalCode = '';
  results;


  constructor(
    private fetchService: FetchServiceService
  ) {
    this.setType('personnel');
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
        };
      } else if (type === 'device') {
        this.searchQuery = {
          category: '',
        };
      } else if (type === 'consumable') {
        this.searchQuery = {
          category: '',
        };
      }
    }
  }


  setRequiresExperienceWithPCR(b: boolean) {
    this.searchQuery.requiresExperienceWithPCR = b;
  }


  isValid() {
    if (!this.postalCode) {
      return false;
    }
    if (this.searchType === 'personnel') {
      return true;
    } else if (this.searchType === 'device' || this.searchType === 'consumable') {
      return !!this.searchQuery.category;
    }
  }


  async onSubmit() {
    let data;
    let targetType;

    if (this.searchType === 'personnel') {
      targetType = 'manpower';
      data = {
        kilometer: this.DISTANCE_KILOMETER,
        qualification: [],
        area: [],
        experience_rt_pcr: this.searchQuery.requiresExperienceWithPCR,
        postalcode: this.postalCode,
        country: 'Deutschland'
      };

      for (const key in this.searchQuery.qualification) {
        if (this.searchQuery.qualification[key] === true) {
          data.qualification.push(key.toString().toLowerCase());
        }
      }

      for (const key in this.searchQuery.area) {
        if (this.searchQuery.area[key] === true) {
          data.area.push(key.toString().toLowerCase());
        }
      }

    } else if (this.searchType === 'device') {
      targetType = 'devices';
      data = {
        kilometer: this.DISTANCE_KILOMETER,
        category: this.searchQuery.category,
        postalcode: this.postalCode,
        country: 'Deutschland'
      };

    } else if (this.searchType === 'consumable') {
      targetType = 'consumables';
      data = {
        kilometer: this.DISTANCE_KILOMETER,
        category: this.searchQuery.category,
        postalcode: this.postalCode,
        country: 'Deutschland'
      };
    }

    this.results = await this.fetchService.getOffers(targetType, data);
    this.results.sort((res1, res2) => {
      return res1.item.kilometer - res2.item.kilometer;
    });
  }
}
