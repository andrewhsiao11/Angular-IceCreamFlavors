import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IceCreamFlavorsComponent } from './ice-cream-flavors/ice-cream-flavors.component';
import { IceCreamDetailComponent } from './ice-cream-detail/ice-cream-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IceCreamFlavorsComponent,
    IceCreamDetailComponent,
    MessagesComponent,
    HomepageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
