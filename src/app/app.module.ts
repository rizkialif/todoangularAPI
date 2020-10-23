
import { TodoapiService } from './sharedservice/todoapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { ProdukComponent } from './homepage/produk/produk.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CarouselComponent,
    ProdukComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  exports:[],
  providers: [TodoapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
