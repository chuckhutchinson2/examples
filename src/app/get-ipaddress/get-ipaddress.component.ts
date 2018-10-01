import { Component, OnInit } from '@angular/core';

import { GetIPAddressService } from "../services/get-ipaddress.service";
import { IpAddressData } from "../ipaddressdata.model";

@Component({
  selector: 'app-get-ipaddress',
  templateUrl: './get-ipaddress.component.html',
  styleUrls: ['./get-ipaddress.component.css']
})
export class GetIPAddressComponent implements OnInit {

  constructor(private getIPAddressService: GetIPAddressService) {}
  ipinfo: IpAddressData;

  ngOnInit() {
    this.ipinfo = {
        ip: "",
        hostname: "",
        city: "",
        region: "",
        country: "",
        loc: "",
        postal: "",
        org: ""
    };
    console.log('loading ip info');
    this.getIPAddressService.find().subscribe(ipinfo => this.process(ipinfo));
  }

  process(ipinfo) {
    this.ipinfo = ipinfo;
    console.log(this.ipinfo);
  }
}
