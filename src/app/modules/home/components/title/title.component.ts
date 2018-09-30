import {Component, OnInit, HostBinding, OnDestroy} from '@angular/core';
import {getScrollTop} from '../../../../utils/scrollMeasures';
import {AppService} from '../../../../services/app.service';
import {AnimationHooks} from '../../../../models/AnimationHooks';
import {CustomerOrder} from '../../../../models/CustomerOrder';
import {Subscription} from 'rxjs/Subscription';
import {VideoService} from '../../../../services/video.service';
import {ModalWindowService} from '../../../shared/services/modal-window.service';

@Component({
	selector: 'title-home',
	templateUrl: './title.component.html',
	styles: []
})
export class TitleComponent implements OnInit, OnDestroy {
	@HostBinding('class.promo') className = true;

	public animationHooks: AnimationHooks = <AnimationHooks>{};
	public orders: CustomerOrder[];
	public randomVideoModalId = 'randomVideoModalWindow';
	public randomVideo: CustomerOrder;

	private ordersSubscription: Subscription;

	constructor(private appService: AppService,
				private videoService: VideoService,
				private modalService: ModalWindowService) {
	}

	ngOnInit() {
		this.animationHooks = this.appService.getAnimationHooks();
		this.ordersSubscription = this.videoService.orders.subscribe(
			(orders: CustomerOrder[]) => this.orders = orders
		);
	}

	ngOnDestroy() {
		this.ordersSubscription.unsubscribe();
	}

	public isScrolled(): boolean {
		return getScrollTop() > 0;
	}

	public isOpenedModal(): boolean {
		return this.modalService.isOpened(this.randomVideoModalId);
	}

	public openRandomVideo(): void {
		const orders = this.videoService.orders.getValue();

		if (orders.length) {
			this.randomVideo = orders[Math.floor(Math.random() * orders.length)];
			this.modalService.open(this.randomVideoModalId);
		}
	}

}
