import { Component } from '@angular/core';
import { CandiesService } from './common/candies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: any[] = [];
  totalPages: number;
  showProducts: any[] = [];
  page: any;

  constructor(private service: CandiesService) {
    this.service.setCandies()
    .subscribe(res => {
      this.products.push(res);
      this.totalPages = this.products.length;
      this.service.candiesList = this.products;
      console.log(this.service.candiesList);
    });
  }
}
