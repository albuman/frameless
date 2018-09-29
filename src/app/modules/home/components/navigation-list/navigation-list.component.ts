import {
	Component,
	OnInit,
	Input,
	ViewChildren,
	ViewChild,
	QueryList,
	ElementRef,
	OnChanges,
	ChangeDetectorRef,
	SimpleChanges
} from '@angular/core';
import {OrderDetailsComponent} from '../../../shared/components/order-details/order-details.component';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ScrollbarComponent} from 'ngx-scrollbar';
import {ModalWindowService} from "../../../shared/services/modal-window.service";

interface NavItem {
	attachedTo: string;
}

@Component({
	selector: 'navigation-list',
	templateUrl: './navigation-list.component.html',
	styles: []
})
export class NavigationListComponent implements OnInit, OnChanges {
	@Input() className;
	@Input() contentClass;
	@Input() orders;
	@ViewChildren(OrderDetailsComponent) orderDetails: QueryList<OrderDetailsComponent>;
	@ViewChild(ScrollbarComponent) scrollBar: ScrollbarComponent;


	public orderDetailsModalId = 'orderDetailsModalWindow';
	public activeItem = new BehaviorSubject(null);
	public currentDescription:any = null;

	constructor(private modalService: ModalWindowService) {
	}

	ngOnInit() {

	}

	log(coords) {
		console.log(coords);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (
			changes.orders.currentValue &&
			changes.orders.currentValue.length &&
			changes.orders.currentValue.length > 0) {
			this.activeItem.next(this.orders[0]);
		}
	}

	activate(navItem) {
		this.activeItem.next(navItem);
		this.scrollTo(navItem);
	}

	scrollTo(navItem) {
		const framePosition = this.scrollBar.view.getBoundingClientRect();

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
