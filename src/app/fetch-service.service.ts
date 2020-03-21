import { Injectable } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

const url = "localhost:5000/resources"


@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor() { }

  
  sendOffer(data) {
  
    var request = new Request(url, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers: new Headers()
    });


    fetch(request)
    .then(function() {
          // Handle response you get from the server
    });

  }

}
