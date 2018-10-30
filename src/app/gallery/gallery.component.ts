import { Component, OnInit } from '@angular/core';
import { CandiesService } from '../common/candies.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  products: any[] = [];
  totalPages: number;
  page: number;
  showProducts: any[];

  constructor(private service: CandiesService) {}

  ngOnInit() {

    this.page = 1;

    this.service.setCandies()
    .subscribe(res => {
      this.products.push(res);
      this.totalPages = this.products.length;
      if (this.totalPages > 12) {
        this.showProducts = this.products.slice(1, 12);
      }
    });

  }

  change() {
    console.log(this.page);
    if (this.page === 1) {
      this.showProducts = this.products.slice(1, 12);
    } else {
      this.showProducts = this.products.slice((this.page - 1) * 12, 12 * this.page);
    }
  }

}
