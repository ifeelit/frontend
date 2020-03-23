import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchServiceService } from '../fetch-service.service';
import { environment } from "../../environments/environment";
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';


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
    this.route.params.subscribe(async (params) => {
      const isNewParam = this.route.snapshot.queryParamMap.get("new-created");
      this.isNew = isNewParam !== null && isNewParam !== undefined;

      this.key = params.key;
      this.currentUrl = environment.pageHost + '/offer/' + this.key;
      let response = await this.fetchService.reviewOffer(this.key);
      this.data = {
        contactData: {
          organisation: response.provider.organisation,
          person: response.provider.name,
          mail: response.provider.mail,
          phone: response.provider.phone,
          street: response.provider.address.street,
          houseNumber: response.provider.address.streetnumber,
          postalCode: response.provider.address.postalcode,
          city: response.provider.address.city,
          country: response.provider.address.country,
        },
        resources: []
      };

      //Add personnel to data
      response.personals.forEach(element => {
        this.data.resources.push(
          {
            type: 'personnel',
            qualification: element.qualification,
            institution: element.institution,
            researchGroup: element.area,
            area: element.area,
            experienceWithPCR: element.experience_rt_pcr,
            notes: element.annotation,
          }
        );
      });

      //Add devices to data
      response.devices.forEach(element => {
        this.data.resources.push(
          {
            type: 'device',
            category: element.category,
            deviceName: element.name,
            manufacturer: element.manufacturer,
            ordernumber: element.ordernumber,
            locationPostalCode: element.address.postalcode,
            number: element.amount,
            unit: '', // no units from server
            unitSelfDefined: '',
            notes: '', // no annotation from server
          }
        );
      });

      //Add consumables to data
      response.consumables.forEach(element => {
        this.data.resources.push(
          {
            ttype: 'consumable',
            category: element.category,
            deviceName: element.name,
            manufacturer: element.manufacturer,
            ordernumber: element.ordernumber,
            locationPostalCode: element.address.postalcode,
            number: element.amount,
            unit: 'item', // no units from server
            unitSelfDefined: '',
            notes: '', // no annotations from server 
          }
        );
      });

      //Seite wird geladen
      
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
