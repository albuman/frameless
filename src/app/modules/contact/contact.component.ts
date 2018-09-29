import { Component, OnInit, HostBinding } from '@angular/core';
import {AppService} from "../../services/app.service";
import {SocialAddresses} from "../../models/socials";

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html',
	styles: []
})
export class ContactComponent implements OnInit {
	@HostBinding('class.contact') className = true;
	public socialAddresses: SocialAddresses = {};

	constructor(private appService: AppService) { }

	ngOnInit() {
		this.socialAddresses = this.appService.getSocialAdresses();
	}

}
