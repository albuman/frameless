import { Component, OnInit, HostBinding } from '@angular/core';
import { ModalWindowService } from '../../../shared/services/modal-window.service';

@Component({
	selector: 'partner-form',
	templateUrl: './partner-form.component.html',
	styles: []
})
export class PartnerFormComponent implements OnInit {
	@HostBinding('class.partner-form') className = true;

	public termsModalId = 'termsoModalWindow';
	public dropdownItems = [
		"$1000 - 2000",
		"$2000 - 5000",
		"$5000 - 10 000",
		"$10 000 - 20 000",
		"$20 000+"
	];
	public dropdownTitle = "Select a project budget";

	constructor(private modalService: ModalWindowService) { }

	ngOnInit() {
	}

	public showTerms() {
		this.modalService.open(this.termsModalId);
	}
}
