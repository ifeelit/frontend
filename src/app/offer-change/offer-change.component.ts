import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-change',
  templateUrl: './offer-change.component.html',
  styleUrls: ['./offer-change.component.scss']
})
export class OfferChangeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private key
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params.key; 
      //fetch get request
      //speicher in goods variable
      //lade seite
    });
  }
  
}
