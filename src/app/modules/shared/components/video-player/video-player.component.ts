import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {SafeResourceUrl} from "@angular/platform-browser";

@Component({
	selector: 'video-player',
	templateUrl: './video-player.component.html',
	styles: []
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
	@Input() videoUrl: SafeResourceUrl;
	@Output() onLoad = new EventEmitter();

	public loaded = false;

	constructor() {
	}

	ngOnInit() {
	}

	ngOnDestroy() {
	}

	public togglePlaceholder(evt): void {
		this.loaded = true;
		this.onLoad.emit(evt);
	}

	public isLoaded(): boolean {
		return this.loaded;
	}
}
