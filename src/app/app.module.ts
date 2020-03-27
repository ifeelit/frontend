import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfferSearchComponent } from './offer-search/offer-search.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AboutComponent } from './about/about.component';
import { OfferSearchResultListComponent } from './offer-search-result-list/offer-search-result-list.component';
import { OfferChangeComponent } from './offer-change/offer-change.component';
import { OfferFormResourceBlockComponent } from './offer-form-resource-block/offer-form-resource-block.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { OfferSearchContactFormComponent } from './offer-search-contact-form/offer-search-contact-form.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OfferSearchComponent,
    OfferFormComponent,
    FaqPageComponent,
    ImpressumComponent,
    AboutComponent,
    OfferSearchResultListComponent,
    OfferChangeComponent,
    OfferFormResourceBlockComponent,
    OfferSearchContactFormComponent,
    ContactPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
