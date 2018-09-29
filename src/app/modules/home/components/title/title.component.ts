import {Component, OnInit, HostBinding, Input } from '@angular/core';
import {getScrollTop} from '../../../../utils/scrollMeasures';
import {AppService} from "../../../../services/app.service";
import {CustomerOrder} from "../../../../models/CustomerOrder";
import {ModalWindowService} from "../../../shared/services/modal-window.service";
import {AnimationHooks} from "../../../../models/AnimationHooks";

@Component({
	selector: 'title-home',
	templateUrl: './title.component.html',
	styles: []
})
export class TitleComponent implements OnInit {
	@HostBinding('class.promo') className = true;
	@Input() orders: CustomerOrder[];

	public animationHooks: AnimationHooks = <AnimationHooks>{};
	public randomVideoModalId = 'randomVideoModalWindow';
	public randomVideo: CustomerOrder;

	constructor(
		private appService: AppService,
		private modalService: ModalWindowService
	) { }

	ngOnInit() {
		this.animationHooks = this.appService.getAnimationHooks();
	}

	public isScrolled(): boolean {
		return getScrollTop() > 0;
	}

	public openRandomVideo():void {
		if(this.orders.length) {
			this.randomVideo = this.orders[Math.floor(Math.random() * this.orders.length)];
			this.modalService.open(this.randomVideoModalId);
		}
	}

	public isOpenedModal():boolean {
		return this.modalService.isOpened(this.randomVideoModalId);
	}


}
