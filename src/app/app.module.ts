import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemandOverviewComponent } from './demand-overview/demand-overview.component';
import { OfferOverviewComponent } from './offer-overview/offer-overview.component';
import { MenuComponent } from './menu/menu.component';
import { OfferCreateComponent } from './offer-create/offer-create.component';
import { DemandCreateComponent } from './demand-create/demand-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemandOverviewComponent,
    OfferOverviewComponent,
    MenuComponent,
    OfferCreateComponent,
    DemandCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
