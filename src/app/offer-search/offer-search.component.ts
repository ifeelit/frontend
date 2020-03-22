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

  dummyResults = [{}, {}, {}];


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
    this.results = this.dummyResults;

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
