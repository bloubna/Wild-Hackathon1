import { Component, OnInit } from '@angular/core';
import { CandiesService } from '../common/candies.service';

@Component({
  selector: 'app-candy-basket',
  templateUrl: './candy-basket.component.html',
  styleUrls: ['./candy-basket.component.css']
})
export class CandyBasketComponent implements OnInit {

  candies: any[];

  constructor(private service: CandiesService) { }

  ngOnInit() {
    this.candies = this.service.candiesCart;
  }

}
