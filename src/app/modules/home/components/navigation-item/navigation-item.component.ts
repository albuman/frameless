import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'navigation-item',
	templateUrl: './navigation-item.component.html',
	styles: []
})
export class NavigationItemComponent implements OnInit, OnDestroy, AfterViewInit {
	@Input() labelFor;
	@Input() className;
	@Input() activeClass;
	@Input() active: BehaviorSubject<any>;
	@Output() itemClicked = new EventEmitter();
	@Output() coordsChanged = new EventEmitter();

	private activeElemSub: Subscription;

	public isActive;

	constructor(
		private changeDetector: ChangeDetectorRef,
		private view: ElementRef
	) { }

	ngOnInit() {
		this.activeElemSub = this.active.subscribe(
			(description) => {
				this.isActive = description === this.labelFor;
				this.changeDetector.detectChanges();
				if (this.isActive) {
					this.setActive()
				}
			}
		);
	}

	ngOnDestroy() {
		this.activeElemSub.unsubscribe();
	}

	ngAfterViewInit() {
		if (this.isActive) {
			this.setActive();
		}
	}

	setActive() {
		const view = this.view.nativeElement;
		const topCoords = view.offsetTop;
		const elemHeight = view.clientHeight;
		const halfOfElem = topCoords + (elemHeight / 2);

		this.coordsChanged.emit(halfOfElem);
	}

	onItemClicked(evt) {
		this.itemClicked.emit(evt);
	}

}
