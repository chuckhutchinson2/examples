import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCard, MatSort, MatTableDataSource } from '@angular/material';

export interface LocationElement {
  areaCode: string;
  city: string;
  county: string;
  daylightSavingsTime: string;
  fips: string;
  latitude: string;
  longitude: string;
  state: string;
  timeZone: string;
  weatherCode: string;
  zip: string;
}

// https://raw.githubusercontent.com/chuckhutchinson2/zipcode/master/src/main/resources/locations.json
const LOCATION_DATA: LocationElement[] = [
    {
        areaCode: '631',
        city: 'Holtsville',
        county: 'Suffolk',
        daylightSavingsTime: 'Y',
        fips: '36103',
        latitude: '40.8151',
        longitude: '73.0455',
        state: 'NY',
        timeZone: 'EST',
        weatherCode: 'USNY0677',
        zip: '501'
    },
    {
        areaCode: '631',
        city: 'Holtsville',
        county: 'Suffolk',
        daylightSavingsTime: 'Y',
        fips: '36103',
        latitude: '40.8132',
        longitude: '73.0476',
        state: 'NY',
        timeZone: 'EST',
        weatherCode: 'USNY0677',
        zip: '544'
    },
];

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.css']
})
export class LocationTableComponent implements OnInit {

  constructor() { }

  locationDisplayedColumns: string[] = ['areaCode', 'city', 'county', 'state', 'zip', 'daylightSavingsTime', 'fips', 'latitude', 'longitude', 'timeZone', 'weatherCode'];

  dataSource = new MatTableDataSource(LOCATION_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
