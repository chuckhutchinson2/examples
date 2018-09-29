import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LocationElement } from './location-element.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private serviceUrl = 'https://raw.githubusercontent.com/chuckhutchinson2/zipcode/master/src/main/resources/locations.json';
  
  constructor(private http: HttpClient) { }
  
  getLocation(): Observable<LocationElement[]> {
    return this.http.get<LocationElement[]>(this.serviceUrl);
  }
  
}