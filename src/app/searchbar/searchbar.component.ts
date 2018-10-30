import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { CandiesService } from '../common/candies.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})


export class SearchbarComponent implements OnInit {


  model: any;
  names: any[] = [];


  constructor(private service: CandiesService) { }

  ngOnInit() {
    this.service.setCandiesNames()
    .subscribe(res => {
      this.names.push(res);
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.names.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
