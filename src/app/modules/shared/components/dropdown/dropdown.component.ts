import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'dropdown',
	templateUrl: './dropdown.component.html',
	styles: []
})
export class DropdownComponent implements OnInit, OnDestroy {
	@Input('items') items;
	@Input('title') title;
	@Input('default') defaultItem;

	@ViewChild('list') dropdownList: ElementRef;

	public isVisibleList = false;
	public activeItem = null;
	private documentListener: () => void;

	constructor() { }

	ngOnInit() {
		this.activeItem = this.defaultItem;
		this.documentListener = () => {
			this.toggleListVisibility(false);
		};

		document.addEventListener('click', this.documentListener);
	}

	ngOnDestroy() {
		document.removeEventListener('click', this.documentListener);
	}

	public toggleListVisibility(toggle: boolean, evt?: Event): void {
		if (evt) {
			evt.stopPropagation();
		}
		this.isVisibleList = toggle;
	}

	public setActiveItem(evt, item: string): void {
		evt.stopPropagation();
		this.activeItem = item;
		this.title = item;
		this.toggleListVisibility(false);
	}


}
