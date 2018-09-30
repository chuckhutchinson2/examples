import { Component, OnInit, ViewChild } from '@angular/core';
import { Section, Url } from '../section.model';
import { SectionService } from '../services/section.service';
import { SectionDataSource } from '../services/section-data-source.service';

const SECTION_DATA: Section[] = [
	{
		title: "Angular Resources",
		urls: [
			    {
			        title: "Angular tutorial - Tour of Heros",
			        url: "https://angular.io/tutorial"
			    },
			    {
			        title: "Angular CLI Documentation",
			        url: "https://github.com/angular/angular-cli/wiki"
			    },
			    {
			        title: "Angular Blog",
			        url: "https://blog.angular.io/"
			    },
			    {
			        title: "Angular Material",
			        url: "https://material.angular.io/"
			    },
			    {
			        title: "Angular Material Datatable blog",
			        url: "https://blog.angular-university.io/angular-material-data-table/"
			    },
			    {
			        title: "Angular Material Datatable github",
			        url: "https://github.com/angular-university/angular-material-course/tree/2-data-table-finished"
			    }
			]
	},
	{
		title: "Typescript Resources",
		urls: [
			    {
			        title: "Typescript in 5 minutes",
			        url: "http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
			    },
			    {
			        title: "Typescript Documentation",
			        url: "https://www.typescriptlang.org/docs/home.html"
			    }
		]
	},
	{
		title: "NPM Resources",
		urls: [
			    {
			        title: "NPM",
			        url: "https://www.npmjs.com"
			    },
			    {
			        title: "NPM Forum",
			        url: "https://npm.community/"
			    },
			    {
			        title: "NPM Status",
			        url: "https://status.npmjs.org/"
			    },
			    {
			        title: "Node-modules.io - A website dedicated to alternatives to npmjs.com",
			        url: "https://node-modules.io/"
			    }
		]
	}
];

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private sectionService: SectionService) {}

  displayedColumns: string[] = ['position'];
  dataSource: SectionDataSource;

  ngOnInit() {
    this.dataSource = new SectionDataSource(this.sectionService);
    this.dataSource.load();
  }
}
