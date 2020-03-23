import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { environment } from "../environments/environment";
import { Router } from '@angular/router';


const url = environment.apiHost;


@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor(
  ) { }

  //Send offer to server and get the token/key to reaccess the offer
  async sendOffer(data) {
    var request = new Request(url.concat('/resources'), {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers: new Headers(
        { 'Content-Type': 'application/json' }
      )
    });
    const response = await fetch(request);
    if (response.status === 200) {
      const key = await response.text();
      return key;
    }
    else {
      //hancle error code
    }
    
  }


  //Request to review offer from server via a token and return response data
  async reviewOffer(token) {
    let suffix = '/resources/offers/'.concat(token)
    let request = new Request(url.concat(suffix), {
      method: 'GET',
      body: token,
      headers: new Headers(
        { 'Content-Type': 'application/json' }
      )
    });
    
    const response = await fetch(request);
    if (response.status === 200) {
      const reply = await response.json();
      return reply;
    }
    else {
      //hancle error code
    }
  }

  async deleteOffer(token) {
    let suffix = '/resources/offers/'.concat(token)
    let request = new Request(url.concat(suffix),  {
      method: 'DEL',
      body: token,
      headers: new Headers(
        { 'Content-Type': 'application/json' }
      )
    });

    const response = await fetch(request);
    if (response.status === 200) {
      // Deletion was successful
    }
    else {
      //hancle error code
    }
  }


  // API call to fill search page with data, add async and data infustion on page
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
