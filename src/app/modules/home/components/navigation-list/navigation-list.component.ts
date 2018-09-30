import {
	Component,
	OnInit,
	Input,
	ViewChildren,
	ViewChild,
	QueryList,
	OnChanges,
	SimpleChanges, OnDestroy
} from '@angular/core';
import {OrderDetailsComponent} from '../../../shared/components/order-details/order-details.component';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ScrollbarComponent} from 'ngx-scrollbar';
import {ModalWindowService} from '../../../shared/services/modal-window.service';
import {Subscription} from 'rxjs/Subscription';
import {CustomerOrder} from '../../../../models/CustomerOrder';
import {VideoService} from '../../../../services/video.service';

interface NavItem {
	attachedTo: string;
}

@Component({
	selector: 'navigation-list',
	templateUrl: './navigation-list.component.html',
	styles: []
})
export class NavigationListComponent implements OnInit, OnDestroy {
	@Input() className;
	@Input() contentClass;
	@ViewChildren(OrderDetailsComponent) orderDetails: QueryList<OrderDetailsComponent>;
	@ViewChild(ScrollbarComponent) scrollBar: ScrollbarComponent;


	public orderDetailsModalId = 'orderDetailsModalWindow';
	public activeItem = new BehaviorSubject(null);
	public currentDescription: any = null;
	public orders: CustomerOrder[];

	private ordersSubscription: Subscription;

	constructor(private modalService: ModalWindowService,
				private videoService: VideoService) {
	}

	ngOnInit() {
		this.ordersSubscription = this.videoService.orders.subscribe(
			(orders: CustomerOrder[]) => {
				this.orders = orders;

				if (orders.length) {
					this.activeItem.next(orders[0]);
				}
			}
		);
	}

	ngOnDestroy() {
		this.ordersSubscription.unsubscribe();
	}

	activate(navItem) {
		this.activeItem.next(navItem);
		this.scrollTo(navItem);
	}

	scrollTo(navItem) {
		for (const child of this.orderDetails.toArray()) {
			if (navItem === child.description) {
				this.scrollBar.view.scrollTop = child.view.nativeElement.offsetTop;
			}
		}
	}

	setActiveLabel(evt) {
		if (evt) {
			this.getElementInFrame(evt.currentTarget);
		}
	}

	getElementInFrame(frame) {
		const framePosition = frame.getBoundingClientRect();

		for (const child of this.orderDetails.toArray()) {
			const childPosition = child.view.nativeElement.getBoundingClientRect();
			if (childPosition.top <= framePosition.top && childPosition.bottom > framePosition.top) {
				if (this.activeItem.getValue() === child.description) {
					return;
				}
				this.activeItem.next(child.description);
			}
		}

	}

	public openDetailsWindow(description): void {
		this.currentDescription = description;
		this.modalService.open(this.orderDetailsModalId);
	}

	public isOpenedModal(): boolean {
		return this.modalService.isOpened(this.orderDetailsModalId);
	}

}
