import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchServiceService } from '../fetch-service.service';
import { environment } from "../../environments/environment";


@Component({
  selector: 'app-offer-change',
  templateUrl: './offer-change.component.html',
  styleUrls: ['./offer-change.component.scss']
})
export class OfferChangeComponent implements OnInit {

  // Whether the offer was just created
  isNew: boolean;
  key: string;
  currentUrl: string;

  data: any;

  dummyData = {
    contactData: {
      organisation: 'TU München, Lehrstuhl für Biochemie',
      person: 'Anna Meier',
      mail: 'anna.meier@tum.de',
      phone: '089 28913006',
      street: 'Lichtenbergstr.',
      houseNumber: '4',
      postalCode: '85748',
      city: 'Garching',
      country: 'Deutschland',
    },
    resources: [
      {
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
      },
      {
        type: 'consumable',
        category: 'readoutplates',
        deviceName: 'Test',
        manufacturer: 'Test',
        ordernumber: '123',
        locationPostalCode: '12345',
        number: 23,
        unit: 'item',
        unitSelfDefined: '',
        notes: '',
      },
      {
        type: 'personnel',
        qualification: '',
        institution: '',
        researchGroup: '',
        area: '',
        experienceWithPCR: undefined,
        notes: '',
      }
    ]
  };


  constructor(
    private route: ActivatedRoute,
    private fetchService: FetchServiceService
  ) {
  };


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const isNewParam = this.route.snapshot.queryParamMap.get("new-created");
      this.isNew = isNewParam !== null && isNewParam !== undefined;

      this.key = params.key;
      this.currentUrl = environment.pageHost + '/offer/' + this.key;
      let response = this.fetchService.reviewOffer(this.key);
      this.data = {
        //Wait for correct message implementation from Server
      }
      
      //lade seite
      this.data = this.dummyData;
    });
  }


  onSubmit(): void {
    //DEL request an server through fetch
  }


  deleteItem(delGood: number) {
    if (this.data.resources.length !== 0) {
      this.data.resources.splice(delGood,1);
    }
  }
}
