import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularOpenlayersModule } from 'ngx-openlayers';

import { ImagePreloadDirective } from './common/image-preload.directive';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CandyModalComponent } from './candy-modal/candy-modal.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalMapComponent } from './modal-map/modal-map.component';
import { CandyBasketComponent } from './candy-basket/candy-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeaderComponent,
    MapComponent,
    ImagePreloadDirective,
    ContactComponent,
    SearchbarComponent,
    CandyModalComponent,
    AcceuilComponent,
    NotFoundComponent,
    ModalMapComponent,
    CandyBasketComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
