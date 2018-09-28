import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { LocationDataSource } from '../services/location-data-source.service';
import { LocationElement } from '../location-element.model';
// https://raw.githubusercontent.com/chuckhutchinson2/zipcode/master/src/main/resources/locations.json

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.css']
})
export class LocationTableComponent implements OnInit {

  constructor(private locationService: LocationService) {}

  locationDisplayedColumns: string[] = ['areaCode', 'city', 'county', 'state', 'zip', 'daylightSavingsTime', 'fips', 'latitude', 'longitude', 'timeZone', 'weatherCode'];

  dataSource: LocationDataSource;

  ngOnInit() {
    this.dataSource = new LocationDataSource(this.locationService);
    this.dataSource.loadLocations();
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
	}

}
