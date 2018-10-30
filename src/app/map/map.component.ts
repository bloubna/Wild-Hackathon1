import { Component, OnInit } from '@angular/core';
import { AdresseService } from '../common/adresse.service';
import * as _ from 'lodash';

declare var ol: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude = 46.227638 ; // coordonnées de la france par defaut
  longitude = 2.213749;

  map: any;
  adresse: any;
  adresses: any[] = [];
  label: string ;

  constructor(private service: AdresseService) { }

  ngOnInit() {

    this.service.readAll().subscribe(res => {
      this.adresse = res;

      console.log(res);
      for (let i = 0; i < res.features.length; i++) {
      this.adresses.push(res.features[i].properties.label);
      }
      console.log(this.adresses);
    });


   const mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });


    this.map = new ol.Map({
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([mousePositionControl]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([2.213749, 46.227638]),
        zoom: 6
      })
    });


    this.map.on('click', function (args) {
      console.log(args.coordinate);
      const lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
      console.log(lonlat);

      const lon = lonlat[0];
      const lat = lonlat[1];
      alert(`lat: ${lat} long: ${lon}`);
    });
  }
  setCenter() {
    const view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(17);
  }
  getCoordinatesByLabel(label: string) {
    const index = this.adresses.indexOf(label);
    this.longitude = this.adresse.features[index]['geometry'].coordinates[0];
    this.latitude = this.adresse.features[index]['geometry'].coordinates[1];

  }
}
