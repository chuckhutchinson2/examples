import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Section} from "../section.model";
import {map} from "rxjs/operators";

@Injectable()
export class SectionService {

    constructor(private http:HttpClient) {
    }

    findAll(): Observable<Section[]> {
        return this.http.get<Section[]>('/links.json')
            .pipe(
                map(res => res )
            );
    }
}