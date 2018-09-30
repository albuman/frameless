import {Component, OnInit, Input, ViewChild, OnDestroy} from '@angular/core';
import {RootEventListener} from '../../../../utils/rootListener';
import {getScrollTop} from '../../../../utils/scrollMeasures';

export interface NavigationLink {
	title: string;
	id: string;
	active?: boolean;
}

@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html',
	styles: []
})
export class NavigationComponent implements OnInit, OnDestroy {
	@Input() links: NavigationLink[];
	@ViewChild('container') $container;
	@ViewChild('list') $list;
	@ViewChild('position') $position;

	private rootListener = new RootEventListener();

	constructor() {
	}

	ngOnInit() {
		this.rootListener.add('scroll', this.onScroll.bind(this));
	}

	ngOnDestroy() {
		this.rootListener.remove();
	}

	public scrollTo(evt, id: string): void {
		const el = this.getElement(id);
		const lastActive = this.$list.nativeElement.querySelector('active');

		if (lastActive && lastActive !== evt.currentTarget) {
			lastActive.classList.remove('active');
		}

		if (el) {
			const elCoords = el.getBoundingClientRect();
			evt.currentTarget.classList.add('active');
			window.scrollTo(0, elCoords.top + getScrollTop() + 2);
		}
	}

	public onScroll(): void {
		this.links.forEach(link => {
			const el = this.getElById(link.id);

			if (this.isLinkActive(link.id) && el) {
				el.classList.add('active');
			} else {
				el.classList.remove('active');
			}
		});
	}

	public isLinkActive(id: string): boolean {
		const el = this.getElement(id);

		if (el) {
			const elCoords = el.getBoundingClientRect();
			const {top, height} = elCoords;

			if (top < 0 && top + height >= 0) {
				return true;
			}
		}

		return false;
	}

	private getElement(id: string) {
		return document.querySelector(`[data-for=${id}]`);
	}

	private getElById(id: string) {
		return document.getElementById(id);
	}

}
