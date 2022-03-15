import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IceCreamFlavorsComponent } from './ice-cream-flavors/ice-cream-flavors.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  { path: 'iceCream', component: IceCreamFlavorsComponent },
  { path: 'aboutPage', component: AboutPageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
