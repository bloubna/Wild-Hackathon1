import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandiesService {

  constructor(private http: HttpClient) { }

  setCandies(): Observable<any> {
    const obs = new BehaviorSubject({});

    for (let i = 1; i < 6; i++) {
      this.http.get(`https://ssl-api.openfoodfacts.org/category/candies/${i}.json`).subscribe(data => {
        for (let j = 0; j < 20; j++) {
          obs.next(data['products'][j]);
        }
      });
    }

    return obs;
  }

  setCandiesNames(): Observable<any> {
    const obs = new BehaviorSubject('');

    for (let i = 1; i < 6; i++) {
      this.http.get(`https://ssl-api.openfoodfacts.org/category/candies/${i}.json`).subscribe(data => {
        for (let j = 0; j < 20; j++) {
          obs.next(data['products'][j].product_name);
        }
      });
    }

    return obs;
  }
}
