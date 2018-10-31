import { Component, OnInit } from '@angular/core';
import { AdresseService } from '../common/adresse.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { CandiesService } from '../common/candies.service';

declare var ol: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // latitude = 46.227638 ; // coordonnées de la france par defaut
  // longitude = 2.213749;

  latitude = 47.394144; // coordonnées de Tours par defaut
  longitude = 0.68484;

  map: any;
  adresse: any;
  adresses: any[] = [];
  label: string ;
  zoom = 12;

  distance = 60;
  points: Array<{ x: number; y: number; candy: any; }> = [];

  constructor(private service: AdresseService, private modalService: NgbModal, private candy: CandiesService) { }

  ngOnInit() {

    this.service.readAll().subscribe(res => {
      this.adresse = res;

      console.log(res);
      for (let i = 0; i < res.features.length; i++) {
      this.adresses.push(res.features[i].properties.label);
      }
      // console.log(this.adresses);
    });

    const nbPoints = 100;
    for (let i = 0; i < nbPoints; ++i) {
      this.points.push({
        x: this.getRandomInRange(0.65, 0.75, 7),
        y: this.getRandomInRange(47.396, 47.38, 6),
        candy: this.setCandy()
      });
    }
    // console.log(this.points);

  }

  setCandy() {
    const rand = Math.floor(Math.random() * Math.floor(this.candy.candiesList.length));
    return this.candy.candiesList[rand];
  }

  getCoordinatesByLabel(label: string) {
    const index = this.adresses.indexOf(label);
    this.zoom = 16;
    this.longitude = this.adresse.features[index]['geometry'].coordinates[0];
    this.latitude = this.adresse.features[index]['geometry'].coordinates[1];

  }
  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }

  openLg(content) {
    this.modalService.open(content);
  }
}
