import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-offer-search-result-list',
  templateUrl: './offer-search-result-list.component.html',
  styleUrls: ['./offer-search-result-list.component.scss']
})
export class OfferSearchResultListComponent implements OnInit, OnChanges {

  @Input() type: string;
  @Input() searchResults: Array<any>;

  showDetails: Array<boolean>;

  dummyAddress = "Anne Bonny\n" +
    "Meeresinstitut Irland\n" +
    "Kapitänslounge 2\n" +
    "1700 Wasser\n" +
    "mail@john-rackham.uk";


  constructor() {
  }


  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchResults) {
      this.showDetails = [];
      for (let i = 0; i < this.searchResults.length; i++) {
        this.showDetails.push(false);
      }
    }
  }


  toggleShowDetails(i) {
    this.showDetails[i] = !this.showDetails[i];
  }
}
