import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent} from './gallery/gallery.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'gallery/:page', component: GalleryComponent },
  { path: 'map', component: MapComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: AcceuilComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]

})
export class AppRoutingModule { }
