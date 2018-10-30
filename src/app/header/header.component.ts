import { Component, OnInit } from '@angular/core';
import { CandiesService } from '../common/candies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: CandiesService) { }

  ngOnInit() {
  }

}
