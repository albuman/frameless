import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {ModalWindowService} from '../../services/modal-window.service';

@Component({
	selector: 'modal-window',
	templateUrl: './modal-window.component.html',
	styles: []
})
export class ModalWindowComponent implements OnInit, OnDestroy {

	@Input('id') id: string;
	@Input() classes: any;

	public isOpened = false;
	public isClosing = false;
	public closed = true;

	constructor(public modalService: ModalWindowService) {
	}

	ngOnInit() {
		this.modalService.add(this);
	}

	ngOnDestroy() {
		this.modalService.remove(this.id);
	}

	public getId(): string {
		return this.id;
	}

	public open(): void {
		this.isOpened = true;
		this.closed = false;
	}

	public close(): void {
		this.isClosing = true;
		this.isOpened = false;

		setTimeout(() => {
			this.isClosing = false;
			this.closed = true;
		}, 500);
	}


	public isClosed(): boolean {
		return this.closed;
	}


	public extend(...objs) {
		return Object.assign({}, ...objs);
	}


}
