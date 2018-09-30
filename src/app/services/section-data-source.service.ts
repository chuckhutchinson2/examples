import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Section} from "../section.model";
import {Observable} from "rxjs/Observable";
import {SectionService} from "./section.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {catchError, finalize} from "rxjs/operators";
import {of} from "rxjs/observable/of";

export class SectionDataSource implements DataSource<Section> {

 	private sectionSubject = new BehaviorSubject<Section[]>([]);

 	private loadingSubject = new BehaviorSubject<boolean>(false);

 	public loading$ = this.loadingSubject.asObservable();

	constructor(private sectionService: SectionService) {}

    load() {
    	this.loadingSubject.next(true);

        this.sectionService.findAll().pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(sections => this.sectionSubject.next(sections));
     }

    connect(collectionViewer: CollectionViewer): Observable<Section[]> {
        console.log("Connecting data source");
        return this.sectionSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.sectionSubject.complete();
        this.loadingSubject.complete();
    }
}
