import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfferSearchComponent } from "./offer-search/offer-search.component";
import { FaqPageComponent } from './faq-page/faq-page.component';
import { OfferFormComponent } from "./offer-form/offer-form.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'angebote/neu', component: OfferFormComponent },
  { path: 'suchanfrage', component: OfferSearchComponent },
  { path: 'faq', component: FaqPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
