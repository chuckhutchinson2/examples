import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Section} from "../section.model";
import {map} from "rxjs/operators";

@Injectable()
export class SectionService {

    constructor(private http:HttpClient) {
    }

    findAll(sectionJson): Observable<Section[]> {
        return this.http.get<Section[]>(sectionJson)
            .pipe(
                map(res => res )
            );
    }
}