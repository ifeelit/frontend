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


  constructor() {
  }


  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchResults) {
      this.showDetails = [];
      for (const _ of this.searchResults) {
        this.showDetails.push(false);
      }
    }
  }


  toggleShowDetails(i) {
    this.showDetails[i] = !this.showDetails[i];
  }


  formatAddress(address): string {
    const streetLine = `${address.street ?? ''} ${address.streetnumber ?? ''}`.trim() + '\n';
    const cityLine = `${address.postalcode ?? ''} ${address.city ?? ''}`.trim().concat('\n');
    const countryLine = `${address.country && (address.country !== 'Deutschland') ? address.country : ''}`;
    return (streetLine + cityLine + countryLine).trim();
  }
}
