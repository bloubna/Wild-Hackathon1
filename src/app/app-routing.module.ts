import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent} from './gallery/gallery.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'gallery/:page', component: GalleryComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]

})
export class AppRoutingModule { }
