import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfferOverviewComponent } from "./offer-overview/offer-overview.component";
import { DemandOverviewComponent } from "./demand-overview/demand-overview.component";
import { OfferCreateComponent } from "./offer-create/offer-create.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'angebote', component: OfferOverviewComponent },
  { path: 'angebote/neu', component: OfferCreateComponent },
  { path: 'nachfragen', component: DemandOverviewComponent },
  { path: 'nachfragen/neu', component: DemandOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
