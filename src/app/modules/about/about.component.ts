import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'about',
	templateUrl: './about.component.html',
	styles: []
})
export class AboutComponent implements OnInit {

	constructor() { }

	public links = [
		{
			title: 'Make your idea sound louder',
			id: 'your-idea'
		},
		{
			title: 'What we adore?',
			id: 'adore'
		}, 
		{
			title: 'How we do?',
			id: 'how-we-do'
		},
		{
			title: 'Our teem',
			id: 'our-team'
		}
	]

	ngOnInit() {
	}

}
