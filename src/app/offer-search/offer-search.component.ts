import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-search',
  templateUrl: './offer-search.component.html',
  styleUrls: ['./offer-search.component.scss']
})
export class OfferSearchComponent implements OnInit {

  searchType: string;
  searchQuery;
  postalCode = '';


  constructor() { }

  ngOnInit(): void {
  }


  setType(type) {
    if (this.searchType !== type) {
      this.searchType = type;

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
    console.log(this.searchType, this.searchQuery, this.postalCode);
  }
}
