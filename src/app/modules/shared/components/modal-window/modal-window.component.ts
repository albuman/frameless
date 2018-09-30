import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import {ModalWindowService} from '../../services/modal-window.service';

@Component({
	selector: 'modal-window',
	templateUrl: './modal-window.component.html',
	styles: []
})
export class ModalWindowComponent implements OnInit, OnDestroy {

	@Input('id') id: string;
	@Input() classes: any;
	@Output() modalOpened = new EventEmitter();
	@Output() modalClosing = new EventEmitter();
	@Output() modalClosed = new EventEmitter();

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
		this.modalOpened.emit(true);
		console.log('opened');
	}

	public close(): void {
		this.isClosing = true;
		this.isOpened = false;
		this.modalClosing.emit();

		setTimeout(() => {
			this.isClosing = false;
			this.closed = true;
			this.modalClosed.emit();
		}, 500);
	}


	public isClosed(): boolean {
		return this.closed;
	}


	public extend(...objs): void {
		return Object.assign({}, ...objs);
	}


}
