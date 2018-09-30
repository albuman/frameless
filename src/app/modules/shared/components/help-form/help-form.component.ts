import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'help-form',
	templateUrl: './help-form.component.html',
	styles: []
})
export class HelpFormComponent implements OnInit {
	@Input() withCheckbox: boolean;
	@Output() onShowTerms = new EventEmitter<any>();

	constructor() {
	}

	ngOnInit() {
	}

	public showTerms(evt) {
		evt.stopPropagation();
		this.onShowTerms.emit();
	}

}
