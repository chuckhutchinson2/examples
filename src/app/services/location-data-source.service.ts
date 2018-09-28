import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {LocationElement} from "../location-element.model";

import {Observable} from "rxjs/Observable";
import {LocationService} from "./location.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {catchError, finalize} from "rxjs/operators";
import {of} from "rxjs/observable/of";

export class LocationDataSource implements DataSource<LocationElement> {

 	private locationsSubject = new BehaviorSubject<LocationElement[]>([]);

 	private loadingSubject = new BehaviorSubject<boolean>(false);

 	public loading$ = this.loadingSubject.asObservable();

	constructor(private locationService: LocationService) {}

    loadLocations() {
    	this.loadingSubject.next(true);

        this.locationService.findAllLocations().pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(locations => this.locationsSubject.next(locations));
     }

    connect(collectionViewer: CollectionViewer): Observable<LocationElement[]> {
        console.log("Connecting data source");
        return this.locationsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.locationsSubject.complete();
    }
}
