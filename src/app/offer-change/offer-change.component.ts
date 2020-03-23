import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
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


  //Delete Content on submit
  onSubmit(): void {
    this.fetchService.deleteOffer(this.key);
    //Redirect to home page
    this.router.navigateByUrl('');
  }


  //Here for ater use of deleting single entries
  deleteItem(delGood: number): void {
    if (this.data.resources.length !== 0) {
      this.data.resources.splice(delGood, 1);
    }
  }
}
