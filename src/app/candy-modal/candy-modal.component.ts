import { Component, OnInit, Input } from '@angular/core';
import { CandiesService } from '../common/candies.service';

@Component({
  selector: 'app-candy-modal',
  templateUrl: './candy-modal.component.html',
  styleUrls: ['./candy-modal.component.css']
})
export class CandyModalComponent implements OnInit {

  @Input()
  modalInput: any;

  @Input()
  mediaInput: any;

  constructor(private service: CandiesService) { }

  ngOnInit() {
    console.log(this.mediaInput);
  }

  addCandy(candy) {
    this.service.candiesCart.push(candy);
  }

}
