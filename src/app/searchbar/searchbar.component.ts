import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { CandiesService } from '../common/candies.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})


export class SearchbarComponent implements OnInit {
  
  
  model: any;
  names: any[] = [];
  
  candy: any;
  
  
  constructor(private service: CandiesService, private modal: NgbModal) { }
  
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
      
      setCandy(value) {
        for (let i = 0; i < this.service.candiesList.length; i++) {
          if (value === this.service.candiesList[i].product_name) {
            this.candy = this.service.candiesList[i];
          }
        }
      }
      
      
      openMedia(content: any) {
        this.modal.open(content).result
        
        .then(resultat => {
          console.log(resultat);
        })
        
        .catch(error => {
          console.log(error);
        });
      }
      
    }
    