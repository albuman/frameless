import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'play-btn',
	templateUrl: './play-btn.component.html',
	styles: []
})
export class PlayBtnComponent implements OnInit {
	@Input() classes: any;
	@Output() openRandomVideo = new EventEmitter();

	constructor() {
	}

	ngOnInit() {
	}

	public extend(...objs): void {
		return Object.assign({}, ...objs);
	}

	public emitOpeningRandomVideo(): void {
		this.openRandomVideo.emit();
	}

}
