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


  constructor(
    private fetchService: FetchServiceService
  ) { }

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

    let data;
    var targetType;

      if (this.searchType === 'personnel') {
        targetType = 'manpower';
        data = {
          qualification: {
            ta: this.searchQuery.qualification.ta,
            labassistant: this.searchQuery.qualification.labAssistant,
            postdoc: this.searchQuery.qualification.postDoc,
            phdstudent: this.searchQuery.qualification.phdStudent,
            mscstudent: this.searchQuery.qualification.mscStudent,
            bscstudent: this.searchQuery.qualification.bscStudent,
            others: this.searchQuery.qualification.others
          },
          area: this.searchQuery.area,
          experience_rt_pcr: this.searchQuery.requiresExperienceWithPCR,
          postal_code: this.postalCode
        }

      } else if (this.searchType === 'device') {
        targetType = 'devices'
        data = {
          category: this.searchQuery.category,
          postal_code: this.postalCode
        }

      } else if (this.searchType === 'consumable') {
        targetType = 'consumables'
        data = {
          category: this.searchQuery.category,
          postal_code: this.postalCode
        }
      }
    

    this.fetchService.getOffer(targetType,data)
    console.log(this.searchType, this.searchQuery, this.postalCode);
  }
}
