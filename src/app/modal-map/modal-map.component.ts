import { Component, OnInit, Input } from '@angular/core';
import { CandiesService } from '../common/candies.service';

@Component({
  selector: 'app-modal-map',
  templateUrl: './modal-map.component.html',
  styleUrls: ['./modal-map.component.css']
})
export class ModalMapComponent implements OnInit {

  @Input()
  modalInput: any;

  @Input()
  mediaInput: any;

  constructor(private service: CandiesService) { }

  ngOnInit() {
  }

  toCart(value) {
    this.service.candiesCart.push(value);
  }

}
