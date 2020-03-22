import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchServiceService } from '../fetch-service.service';


@Component({
  selector: 'app-offer-change',
  templateUrl: './offer-change.component.html',
  styleUrls: ['./offer-change.component.scss']
})
export class OfferChangeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private key,
    private fetchService: FetchServiceService
  ) { };

  goods = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params.key; 
      //fetch get request
      //speicher in goods variable
      //lade seite
    });
  }

  addPersonnel() {
    this.goods.push({
      type: 'personnel',
      qualification: '',
      institution: '',
      researchGroup: '',
      area: '',
      experienceWithPCR: undefined,
      notes: '',
    });
  }


  addDevice() {
    this.goods.push({
      type: 'device',
      category: '',
      deviceName: '',
      manufacturer: '',
      ordernumber: '',
      locationPostalCode: '',
      number: undefined,
      unit: '',
      unitSelfDefined: '',
      notes: '',
    });
  }


  addConsumable() {
    this.goods.push({
      type: 'consumable',
      category: '',
      deviceName: '',
      manufacturer: '',
      ordernumber: '',
      locationPostalCode: '',
      number: undefined,
      unit: '',
      unitSelfDefined: '',
      notes: '',
    });
  }

  onSubmit(): void {
    //DEL request an server through fetch
  }
  
}
