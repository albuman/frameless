import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'order-details',
	templateUrl: './order-details.component.html',
	styles: []
})
export class OrderDetailsComponent implements OnInit {
	@Input() description;
	@Input() withTitle:boolean;
	@Input() showMore:boolean;
	@ViewChild('view') view: ElementRef;
	@Output() onShowOrderDetails = new EventEmitter<any>();

	constructor() { }

	ngOnInit() {
	}

	public showOrderDetails():void {
		this.onShowOrderDetails.emit(this.description);
	}

}
