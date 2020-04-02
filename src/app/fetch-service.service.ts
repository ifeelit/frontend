import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ResourceContactMessage } from './_types/ResourceContactMessage';


const url = environment.apiHost;


@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor() {
  }


  async requestCall(data, recaptchaResponse) {
    const request = new Request(url.concat('/telephone-callback'), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        recaptcha: recaptchaResponse
      })
    });
    const response = await fetch(request);
    if (response.status === 200) {
      // handle correct response*
    } else {
      // handle error code
    }
  }

  // Send offer to server and get the token/key to reaccess the offer
  async sendOffer(data, recaptchaResponse) {
    const request = new Request(url.concat('/resources'), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        recaptcha: recaptchaResponse
      })
    });
    const response = await fetch(request);
    if (response.status === 200) {
      const key = await response.json();
      return { key };
    } else {
      return {
        error: {
          status: response.status,
          message: await response.json(),
        },
      };
    }

  }


  // Request to review offer from server via a token and return response data
  async reviewOffer(token) {
    const suffix = '/resources/offers/'.concat(token);
    const request = new Request(url.concat(suffix), {
      method: 'GET',
      headers: new Headers(
        {'Content-Type': 'application/json'}
      )
    });

    const response = await fetch(request);
    if (response.status === 200) {
      const reply = await response.json();
      return reply;
    } else {
      // handle error code
    }
  }


  async deleteOffer(token) {
    const suffix = '/resources/offers/'.concat(token);
    const request = new Request(url.concat(suffix), {
      method: 'DELETE',
      headers: new Headers(
        {'Content-Type': 'application/json'}
      )
    });

    const response = await fetch(request);
    if (response.status === 200) {
      // Deletion was successful
    } else {
      // handle error code
    }
  }


  // API call to fill search page with data, add async and data infustion on page
  async getOffers(type, data) {
    const suffix = '/resources/'.concat(type);

    const searchParams = new URLSearchParams();
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        continue;
      }
      const value = data[key];
      if (Array.isArray(value)) {
        for (const v of value) {
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
      const results = await response.json();
      return { results };
    } else {
      return {
        error: {
          status: response.status,
          message: await response.json(),
        },
      };
    }

  }


  async sendResourceContactMessage(
    resourceType: string, resourceId: number, message: ResourceContactMessage, recaptcha: string
  ) {
    let resourceUrl;
    switch (resourceType) {
      case 'personnel':
        resourceUrl = 'manpower';
        break;
      case 'device':
        resourceUrl = 'devices';
        break;
      case 'consumable':
        resourceUrl = 'consumables';
        break;
    }
    const currentUrl = `${url}/resources/${resourceUrl}/${resourceId}/contact`;
    const request = new Request(currentUrl, {
      method: 'POST',
      body: JSON.stringify(message),
      headers: new Headers({
        'Content-Type': 'application/json',
        recaptcha
      }),
    });
    const response = await fetch(request);
    if (response.status !== 200) {
      // handle error code
    }
  }


  async subscribeRegion(data, recaptcha: string) {
    const currentUrl = `${url}/subscription`;
    const request = new Request(currentUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        recaptcha
      }),
    });

    const response = await fetch(request);
    if (response.status === 200) {
      return { };
    } else {
      return {
        error: {
          status: response.status,
          message: await response.json(),
        },
      };
    }
  }
}
