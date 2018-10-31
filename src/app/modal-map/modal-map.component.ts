import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
