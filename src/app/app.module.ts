import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfferCreateComponent } from './offer-create/offer-create.component';
import { OfferSearchComponent } from './offer-search/offer-search.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ManpowerFormComponent } from './manpower-form/manpower-form.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { FaqPageComponent } from './faq-page/faq-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfferCreateComponent,
    OfferSearchComponent,
    OfferFormComponent,
    ManpowerFormComponent,
    DeviceFormComponent,
    MaterialFormComponent,
    FaqPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
