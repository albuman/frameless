import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {CustomerOrder} from "../../../../models/CustomerOrder";
declare var Hammer;



@Component({
	selector: 'customer-orders',
	templateUrl: './customer-orders.component.html',
	styles: []
})
export class CustomerOrdersComponent implements OnInit {
	@HostBinding('class.customer-orders') className = true;
	@Input() orders: CustomerOrder[];
	public currentOrderIndex = 0;

	constructor(
	) { }

	ngOnInit() {

	}

	swipe(idx, orders) {
		if (idx < 0 || idx === orders.length) {
			return;
		}

		this.currentOrderIndex = idx;
	}
}
