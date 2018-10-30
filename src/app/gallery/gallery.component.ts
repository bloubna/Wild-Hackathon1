import { Component, OnInit } from '@angular/core';
import { CandiesService } from '../common/candies.service';
import { Router, ActivatedRoute } from '@angular/router';


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

  constructor(private service: CandiesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {

    this.page = this.route.snapshot.params['page'];
    console.log(this.page);

    this.service.setCandies()
    .subscribe(res => {
      this.products.push(res);
      this.totalPages = this.products.length;
      if (this.totalPages > 12 && this.page === 1) {
        this.showProducts = this.products.slice(this.page, 13);
      }
    });

  }

  change() {
    if (this.page === 1) {
      this.showProducts = this.products.slice(1, 13);
    } else {
      this.showProducts = this.products.slice((this.page - 1) * 12, 12 * this.page);
    }
    this.router.navigate([`gallery/${this.page}`]);
    console.log(this.page);
  }

}
