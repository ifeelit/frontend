import { Injectable } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { environment } from "../environments/environment";


const url = environment.apiHost;


@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor() { }

  
  sendOffer(data) {
    var request = new Request(url.concat('/resources'), {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers: new Headers(
        { 'Content-Type': 'application/json' }
      )
    });

    fetch(request)
    .then(function() {
          // Handle response you get from the server incl. exceptions
    });

  }

  getOffer(type,data) {

    var suffix = '/resources/'.concat(type);

    var request = new Request(url.concat(suffix), {
      method: 'GET',
      body: JSON.stringify(data),
      headers: new Headers(
        { 'Content-Type': 'application/json' }
      )
    });

    fetch(request)
    .then(function() {
      // Display Response in output or handle exception
    })
  }

}
