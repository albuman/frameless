import {Component, OnInit, OnDestroy} from '@angular/core';
import {ModalWindowService} from '../../modules/shared/services/modal-window.service';
import {AppService} from '../../services/app.service';
import {Subscription} from 'rxjs/Subscription';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {getScrollTop} from '../../utils/scrollMeasures';
import {SocialAddresses} from '../../models/socials';
import {AnimationHooks} from '../../models/AnimationHooks';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {
	public toggled = false;
	public topScroll: number;
	public isVisible = true;
	public orderModalId = 'orderModalWindow';
	public animationHooks: AnimationHooks = <AnimationHooks>{};
	public isFirstLoading = false;
	public socialAddresses: SocialAddresses;
	private firstLoadingSub: Subscription;
	private disableScrollClass = 'disable-scroll';
	private scrollSub: Subscription;
	/*
	* Modal control properties start
	* */
	public termsOpened = false;
	/*
	* Modal control properties end
	* */

	constructor(private modalService: ModalWindowService,
				public appService: AppService) {
	}

	ngOnInit() {
		this.topScroll = getScrollTop();
		this.scrollSub = fromEvent(document, 'scroll').subscribe(
			() => this.onScroll()
		);
		this.animationHooks = this.appService.getAnimationHooks();
		this.firstLoadingSub = this.appService.firstLoading.subscribe(
			isFirst => {
				this.isFirstLoading = isFirst;
			}
		);
		this.socialAddresses = this.appService.getSocialAdresses();
	}

	ngOnDestroy(): void {
		this.scrollSub.unsubscribe();
		this.firstLoadingSub.unsubscribe();
	}

	doToggle(): void {
		this.toggled = !this.toggled;
		this.toggled ? document.body.classList.add(this.disableScrollClass) :
			document.body.classList.remove(this.disableScrollClass);
	}

	onScroll(): void {
		const scrollTop = getScrollTop();

		if (scrollTop - this.topScroll > 50) {
			this.isVisible = false;
			this.topScroll = scrollTop;
		}

		if (scrollTop - this.topScroll < 0) {
			this.isVisible = true;
			this.topScroll = scrollTop;
		}
	}

	public openOrderWindow(evt): void {
		evt.stopPropagation();
		this.toggled = !this.toggled;
		this.modalService.open(this.orderModalId);
	}

	public openTermsModal(): void {
		this.termsOpened = true;
	}

	public onOrderModalClosed(): void {
		this.termsOpened = false;
	}

	public onOrderModalClose(): void {
		if (this.termsOpened) {
			this.termsOpened = false;
			return;
		}
		this.modalService.close(this.orderModalId);
	}

	public preventScrolling(evt): void {
		evt.preventDefault();
	}


}
