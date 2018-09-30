import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  @Input() interval: number;
  now: number;

  constructor() { }

  ngOnInit() {
  	this.now = Date.now();
  	setInterval(() => {
          this.now = Date.now();
        }, this.interval);
  }
}