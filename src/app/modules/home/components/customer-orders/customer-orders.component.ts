import {Component, OnInit, HostBinding, Input, OnDestroy} from '@angular/core';
import {CustomerOrder} from "../../../../models/CustomerOrder";
import {Subscription} from "rxjs/Subscription";
import {VideoService} from "../../../../services/video.service";

declare var Hammer;


@Component({
	selector: 'customer-orders',
	templateUrl: './customer-orders.component.html',
	styles: []
})
export class CustomerOrdersComponent implements OnInit, OnDestroy {
	@HostBinding('class.customer-orders') className = true;
	public orders: CustomerOrder[];
	public currentOrderIndex = 0;

	private ordersSubscription: Subscription;

	constructor(private videoService: VideoService) {
	}

	ngOnInit() {
		this.ordersSubscription = this.videoService.orders.subscribe(
			(orders: CustomerOrder[]) => this.orders = orders
		);
	}

	ngOnDestroy() {
		this.ordersSubscription.unsubscribe();
	}

	swipe(idx) {
		if (idx < 0 || idx === this.orders.length) {
			return;
		}

		this.currentOrderIndex = idx;
	}
}
