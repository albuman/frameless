import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'video-description',
	templateUrl: './video-description.component.html',
	styles: []
})
export class VideoDescriptionComponent implements OnInit {
	@HostBinding('class.video-item') className = true;
	@Input('video') video;
	@Output() showMore = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	public activateVideo() {
		this.showMore.emit(this.video);
	}
}
