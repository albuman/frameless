import {Injectable} from '@angular/core';
import {tap, delay, take} from 'rxjs/operators'
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {SocialAddresses} from "../models/socials";

@Injectable()
export class AppService {

	private animationHooksSub: Subscription;
	private callsCounter = 0;
	private animationHooks = {
		titleLoaded: false,
		onTimeLabelLoaded: false,
		onBudgetLabelLoaded: false,
		onGoalLabelLoaded: false
	};
	public firstLoading = new BehaviorSubject(true);


	constructor() {

	}

	private resetHooks() {
		Object.keys(this.animationHooks).forEach(key => {
			this.animationHooks[key] = false;
		})
	}

	public loadHooks() {
		this.resetHooks();
		this.callsCounter++;
		this.firstLoading.next(this.isFirstLoad());

		this.animationHooksSub = Observable.create((observer) => {
			observer.next();
		}).pipe(
			delay(1),
			tap(() => this.animationHooks.titleLoaded = true),
			delay(800),
			tap(() => this.animationHooks.onTimeLabelLoaded = true),
			delay(200),
			tap(() => this.animationHooks.onBudgetLabelLoaded = true),
			delay(200),
			tap(() => this.animationHooks.onGoalLabelLoaded = true),
			take(1)
		).subscribe();

		return this.animationHooks;
	}

	public destroyAnimationHooks() {
		this.animationHooksSub.unsubscribe();
	}

	public getAnimationHooks() {
		return this.animationHooks;
	}

	public isFirstLoad() {
		return this.callsCounter <= 1;
	}

	public getSocialAdresses(): SocialAddresses {
		return {
			facebook: 'http://facebook.com/framelessprod',
			linkedin: 'https://www.linkedin.com/company/framelessprod/',
			instagram: 'http://instagram.com/framelessprod'
		};
	}
}
