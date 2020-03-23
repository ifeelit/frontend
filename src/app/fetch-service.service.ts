import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";


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
      method: 'DELETE',
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
  async getOffers(type, data) {
    const suffix = '/resources/'.concat(type);

    const searchParams = new URLSearchParams();
    for (let key in data) {
      if (!data.hasOwnProperty(key)) {
        continue;
      }
      const value = data[key];
      if (Array.isArray(value)) {
        for (let v of value) {
          searchParams.append(key, v);
        }
      } else {
        searchParams.append(key, value);
      }
    }

    const currentUrl = url + suffix + '?' + searchParams.toString();
    const request = new Request(currentUrl, {
      method: 'GET',
      headers: new Headers(
        {'Content-Type': 'application/json'}
      )
    });

    const response = await fetch(request);
    if (response.status === 200) {
      //Offers received
      return await response.json();
    }
    else {
      //hancle error code
    }
    
  }

}
