import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private service: HttpClient) { }

  readAll(): Observable<any> {
    return this.service.get<any>('https://api-adresse.data.gouv.fr/search/?q=tours&type=street&postcode=37000&limit=60');
  }

}
