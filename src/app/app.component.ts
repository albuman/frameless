import {Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import {AppService} from "./services/app.service";
import {SocialAddresses} from "./models/socials";
import {VideoService} from "./services/video.service";
import {Subscription} from "rxjs/Subscription";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styles: []
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
	public animationHooks = {};
	public socialAdresses: SocialAddresses = {};
	private ordersSubscription: Subscription;

	constructor(private appService: AppService,
				private videoService: VideoService) {
	}

	onRouteActivate() {
		window.scroll(0, 0);
	}

	ngOnInit() {
		this.socialAdresses = this.appService.getSocialAdresses();
		this.ordersSubscription = this.videoService.getAllCustomerOrders().subscribe(
			(orders) => {
				this.videoService.orders.next(orders);
			}
		);
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.animationHooks = this.appService.loadHooks();
		}, 1); // unidirectional data flow
	}

	ngOnDestroy() {
		this.ordersSubscription.unsubscribe();
	}

}
