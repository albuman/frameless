import {Component, OnInit, HostBinding} from '@angular/core';
import {VideoService} from "./services/video.service";
import {CustomerOrder} from "../../models/CustomerOrder";

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styles: []
})
export class HomeComponent implements OnInit {
	@HostBinding('class.home') className = true;

	public orders: CustomerOrder[] = [];

	constructor(private videoService: VideoService) {
	}

	ngOnInit() {
		this.videoService.getAllCustomerOrders().subscribe(
			orders => {
				this.orders = orders;
			});
	}

}
