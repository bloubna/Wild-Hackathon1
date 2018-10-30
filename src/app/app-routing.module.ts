import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent} from './gallery/gallery.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'map', component: MapComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]

})
export class AppRoutingModule { }
