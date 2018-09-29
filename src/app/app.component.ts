import {Component, AfterViewInit, OnInit} from '@angular/core';
import {AppService} from "./services/app.service";
import {SocialAddresses} from "./models/socials";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styles: []
})
export class AppComponent implements OnInit, AfterViewInit{
	public animationHooks = {};
	public socialAdresses: SocialAddresses = {};

	constructor(private appService: AppService) {}

	onRouteActivate() {
		window.scroll(0, 0);
	}

	ngOnInit() {
		this.socialAdresses = this.appService.getSocialAdresses();
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.animationHooks = this.appService.loadHooks();
		}, 1); // unidirectional data flow
	}

}
