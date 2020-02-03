import { BeerListComponent } from "../beer/beer-list/beer-list.component";
import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { BeerInfoComponent } from '../beer/beer-info/beer-info.component';
import { CartComponent } from '../beer/cart/cart.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  {path: 'beers', component: BeerListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'beers/:id', component: BeerInfoComponent},
  {path: 'cart', component: CartComponent},
  {path: "",redirectTo: '/beers',pathMatch: 'full'}
];