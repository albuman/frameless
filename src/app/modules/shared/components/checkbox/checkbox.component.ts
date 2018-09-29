import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'checkbox',
	templateUrl: './checkbox.component.html',
	styles: []
})
export class CheckboxComponent implements OnInit {
	@Input() inputId;

	constructor() { }

	ngOnInit() {
	}

}
