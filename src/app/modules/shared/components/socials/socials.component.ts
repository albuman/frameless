import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {AppService} from "../../../../services/app.service";
import {Subscription} from "rxjs/Subscription";

@Component({
	selector: 'socials',
	templateUrl: './socials.component.html',
	styles: []
})
export class SocialsComponent implements OnInit, OnDestroy {
	@Input('primary') isPrimary: boolean;
	@Input() instagram: string;
	@Input() facebook: string;
	@Input() linkedin: string;

	public animationHooks = {};
	public isFirstLoading = false;
	private firstLoadingSub: Subscription;

	constructor(public appService: AppService) {
	}

	ngOnInit() {
		this.animationHooks = this.appService.getAnimationHooks();
		this.firstLoadingSub = this.appService.firstLoading.subscribe((isFirst) => {
			this.isFirstLoading = isFirst;
		})
	}

	ngOnDestroy() {
		this.firstLoadingSub.unsubscribe();
	}

}
