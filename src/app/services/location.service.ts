import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LocationElement} from "../location-element.model";
import {map} from "rxjs/operators";

@Injectable()
export class LocationService {

    constructor(private http:HttpClient) {
    }

    findAllLocations(): Observable<LocationElement[]> {
        return this.http.get<LocationElement[]>('/locations.json')
            .pipe(
                map(res => res )
            );
    }
}
