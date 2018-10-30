import { Component, OnInit } from '@angular/core';
import { CandiesService } from '../common/candies.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  products: any[] = [];
  totalPages: number;

  constructor(private service: CandiesService) {}

  ngOnInit() {

    this.service.setCandies().subscribe(res => {
      this.products.push(res);
    });

  }

}
